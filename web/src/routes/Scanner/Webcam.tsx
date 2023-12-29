import React, {
   Dispatch,
   forwardRef,
   SetStateAction,
   useEffect,
   useImperativeHandle,
   useRef,
   useState,
} from 'react';
import styled from 'styled-components';

/*
 * Below IIFE is a polyfill modified from "react-webcam" (https://github.com/mozmorris/react-webcam/blob/f04f9baea306c5ddd676cc37c94c70505d049a6d/src/react-webcam.tsx#L4-L40).
 * Copyright (c) 2018 Moz Morris
 * Released under the MIT license
 * https://opensource.org/licenses/mit-license.php
 */
(() => {
   if (typeof window === 'undefined') {
      return;
   }

   // Older browsers might not implement mediaDevices at all, so we set an empty object first
   if (navigator.mediaDevices === undefined) {
      (navigator as any).mediaDevices = {};
   }

   // Some browsers partially implement mediaDevices. We can't just assign an object
   // with getUserMedia as it would overwrite existing properties.
   // Here, we will just add the getUserMedia property if it's missing.
   if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = (constraints) => {
         // First get ahold of the legacy getUserMedia, if present
         const getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;

         // Some browsers just don't implement it - return a rejected promise with an error
         // to keep a consistent interface
         if (!getUserMedia) {
            return Promise.reject(
               new Error('getUserMedia is not implemented in this browser.'),
            );
         }

         // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
         return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
         });
      };
   }
})();

type Stream = MediaStream | null;
type SetStream = Dispatch<SetStateAction<Stream>>;
type SetError = Dispatch<SetStateAction<Error | null>>;
type FacingMode = 'user' | 'environment';
type WebcamHandle = {
   capture: () => ImageData | undefined;
};
type Webcam = typeof Webcam & WebcamHandle;
type WebcamProps = {
   playing?: boolean;
   facingMode?: FacingMode;
   hidden?: boolean;
};

const Webcam = forwardRef<unknown, WebcamProps>(
   (
      {
         playing = false,
         facingMode,
         hidden = false,
      },
      ref,
   ) => {
      const [stream, setStream] = useState<MediaStream | null>(null);
      const [error, setError] = useState<Error | null>(null);
      const [isReady, setIsReady] = useState(false);
      const video = useRef<HTMLVideoElement>(null);
      const canvas = useRef<HTMLCanvasElement>(null);

      useEffect(() => {
         if (!video.current) return;
         playing
            ? start(stream, setStream, setError, video.current, facingMode)
            : stop(stream, setStream, video.current);
         return (() => {
            if (video.current) stop(stream, setStream, video.current);
         });
      }, [playing, facingMode]);

      useImperativeHandle(ref, (): WebcamHandle => ({
         capture: () => {
            if (!playing || !video.current || !canvas.current) return;
            return capture(video.current, canvas.current);
         },
      }), [playing]);

      return (
         <>
            {playing && (!isReady || error)
               ? (
                  <MsgContainer>
                     {error ? error2Msg(error) : waitingMsg}
                  </MsgContainer>
               )
               : <></>}
            <Video
               ref={video}
               autoPlay
               playsInline
               muted
               onLoadedData={() => setIsReady(true)}
               hidden={!isReady || !!error || hidden}
            />
            <Canvas ref={canvas} />
         </>
      );
   },
);

const waitingMsg = 'Please grant access to the camera.';
const noCameraMsg =
   'No camera found on the device. Please make sure a camera is connected or available.';
const notAllowedMsg =
   'Access to the camera is not allowed. Please grant permission to access the camera.';

const MsgContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1;
`;

const Video = styled.video`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: left top;
   z-index: 0;
`;

const Canvas = styled.canvas`
   display: none;
`;

const error2Msg = (error: Error) => {
   switch (error.name) {
      case 'NotFoundError':
         return noCameraMsg;
      case 'NotAllowedError':
         return notAllowedMsg;
      default:
         return `${error.name}: ${error.message}`;
   }
};

const capture = (
   video: HTMLVideoElement,
   canvas: HTMLCanvasElement,
): ImageData | undefined => {
   const ct = canvas.getContext('2d');
   if (!ct) return;
   const { videoWidth, videoHeight } = video;
   if (!videoWidth || !videoHeight) return;
   canvas.width = videoWidth;
   canvas.height = videoHeight;
   ct.drawImage(
      video,
      0,
      0,
      videoWidth,
      videoHeight,
   );
   const imageData = ct.getImageData(
      0,
      0,
      videoWidth,
      videoHeight,
   );
   return imageData;
};

const start = async (
   stream: Stream,
   setStream: SetStream,
   setError: SetError,
   video: HTMLVideoElement,
   facingMode?: FacingMode,
) => {
   if (stream) stop(stream, setStream, video);
   try {
      const constraints = {
         audio: false,
         video: facingMode ? { facingMode } : true,
      };
      const mediaStream = await navigator.mediaDevices.getUserMedia(
         constraints,
      );
      video.srcObject = mediaStream;
      setStream(mediaStream);
   } catch (e) {
      setError(e);
   }
};

const stop = (
   stream: Stream,
   setStream: SetStream,
   video: HTMLVideoElement,
) => {
   if (!stream) return;
   stream.getTracks().forEach((track) => track.stop());
   video.srcObject = null;
   setStream(null);
};

export type { FacingMode };
export default Webcam;
