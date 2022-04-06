import React, { Suspense, lazy } from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme/extendTheme";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";
const Layout = lazy(() => import("./routes/layout"));
const Home = lazy(() => import("./routes/home"));
const Destination = lazy(() => import("./routes/destination"));
const Crew = lazy(() => import("./routes/crew"));
const Tech = lazy(() => import("./routes/tech"));

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Tech />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </ChakraProvider>
);

