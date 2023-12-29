import { join } from 'path';
import React, {
   FC,
   forwardRef,
   memo,
   useEffect,
   useRef,
   useState,
} from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { RingSpinnerOverlay } from 'react-spinner-overlay';
import { ToastProvider } from 'react-toast-notifications';
import { styled } from 'styled-components';
import Generator from './routes/Generator.tsx';
import Scanner from './routes/Scanner/index.tsx';
import useWasm, { WasmLoadState, WasmProvider } from './utils/useWasm.tsx';

const App = () => {
   const [headerHeight, setHeaderHeight] = useState(0);
   const [wasmLoaging, setWasmLoading] = useState(true);
   const header = useRef<HTMLElement>(null);
   const wasm = useWasm();

   const updateHeaderHeight = () => {
      setHeaderHeight(header.current?.clientHeight ?? 0);
   };

   useEffect(() => {
      updateHeaderHeight();
      window.addEventListener('resize', updateHeaderHeight);
      return () => window.removeEventListener('resize', updateHeaderHeight);
   }, []);

   useEffect(() => {
      switch (wasm.loadState) {
         case WasmLoadState.Loading:
            setWasmLoading(true);
            break;
         case WasmLoadState.Ready:
            setWasmLoading(false);
            break;
         case WasmLoadState.Error:
            setWasmLoading(false);
            throw wasm.error;
      }
   }, [wasm]);

   return (
      <>
         <RingSpinnerOverlay loading={wasmLoaging} />
         <Header ref={header} />
         <Content headerHeight={headerHeight}>
            <Switch>
               <Route exact path='/'>
                  {isMobile
                     ? <Redirect to='/scanner' />
                     : <Redirect to='/generator' />}
               </Route>
               <Route exact path='/generator'>
                  <Generator />
               </Route>
               <Route exact path='/scanner'>
                  <Scanner />
               </Route>
               <Route exact path='/*'>
                  <Redirect to='/' />
               </Route>
            </Switch>
         </Content>
      </>
   );
};

const Header = memo(
   forwardRef((_, ref) => {
      return (
         <Navbar ref={ref} expand='lg' className='bg-body-tertiary'>
            <Container fluid>
               <Navbar.Brand>
                  File2QRCodeGif
               </Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav
                     variant='underline'
                     className='me-auto'
                  >
                     <Nav.Link as={NavLink} to='/generator'>
                        Generator
                     </Nav.Link>
                     <Nav.Link as={NavLink} to='/scanner'>
                        Scanner
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      );
   }),
);

const Content = styled.div<{ headerHeight: number }>`
   height: calc(100% - ${({ headerHeight }) => headerHeight}px);
`;

const wasmSrc = join(location.origin, location.pathname, 'wasm_bg.wasm');

const ErrorFallback: FC<FallbackProps> = ({ error }) => {
   return (
      <Container fluid>
         <Row>
            <Col>
               <h1>An error has occurred.</h1>
               <p>
                  Please report this issue by providing the console logs.{'  '}
                  <a href='https://github.com/k-kuroguro/file-to-qr-code-gif/issues/new'>
                     Create a new issue.
                  </a>
               </p>
            </Col>
         </Row>
         <Row>
            <Col>
               <pre>{error.message}</pre>
            </Col>
         </Row>
      </Container>
   );
};

const onError = (error: Error, info: { componentStack: string }) => {
   console.log('error.message', error.message);
   console.log('info.componentStack:', info.componentStack);
};

const AppWrapper = () => {
   return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
         <HashRouter>
            <WasmProvider src={wasmSrc}>
               <ToastProvider>
                  <App />
               </ToastProvider>
            </WasmProvider>
         </HashRouter>
      </ErrorBoundary>
   );
};

export default AppWrapper;
