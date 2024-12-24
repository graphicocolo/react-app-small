import {
  BrowserRouter,
  Route,
  Routes,
  type RouteProps,
} from "react-router-dom";
import Home from '@/pages/Home';
import About from '@/pages/About';
import StudyMnt from "@/pages/StudyMnt";
import Basicjsx from "@/pages/Basicjsx";

// https://zenn.dev/tonkotsuboy_com/articles/typescript-as-const-satisfies
const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  },
  {
    path: '/studymnt',
    Component: StudyMnt
  },
  {
    path: '/basicjsx',
    Component: Basicjsx
  },
] as const satisfies RouteProps[];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component }, i) => <Route key={i} path={path} element={<Component />} />)}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;