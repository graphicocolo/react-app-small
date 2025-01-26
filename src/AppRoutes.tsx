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
import FetchApiOne from "@/pages/FetchApiOne";
import FetchApiTwo from "@/pages/FetchApiTwo";
import FetchApiThree from "@/pages/FetchApiThree";
import FetchApiFour from "@/pages/FetchApiFour";
import FetchApiFive from "@/pages/FetchApiFive";
import Forms from "@/pages/Forms";
import SampleCustomHooks from "@/pages/SampleCustomHooks";
import SampleReactMemo from "@/pages/SampleReactMemo";
import SampleUseMemo from "@/pages/SampleUseMemo";
import PrivateContent from "@/pages/PrivateContent";

// https://zenn.dev/takaya39/articles/4669c3fd1c7f04
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
  {
    path: '/fetchapi1',
    Component: FetchApiOne
  },
  {
    path: '/fetchapi2',
    Component: FetchApiTwo
  },
  {
    path: '/fetchapi3',
    Component: FetchApiThree
  },
  {
    path: '/fetchapi4',
    Component: FetchApiFour
  },
  {
    path: '/fetchapi5',
    Component: FetchApiFive
  },
  {
    path: '/forms',
    Component: Forms
  },
  {
    path: '/customhooks1',
    Component: SampleCustomHooks
  },
  {
    path: '/usememo',
    Component: SampleUseMemo
  },
  {
    path: '/private',
    Component: PrivateContent
  },
  {
    path: '/reactmemo',
    Component: SampleReactMemo
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