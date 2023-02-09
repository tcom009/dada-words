import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'features/Layout/index'
import CreatePoem from 'features/poemGenerator/index';
import About from 'features/About/index';
import Home from 'features/Home/index';
import PoemList from 'features/poems/index'
import routeList from './routeList';

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
            <Route path={routeList.HOME} element={<Home />} />
            <Route path={routeList.ABOUT} element={<About />} />
            <Route path={routeList.CREATE} element={<CreatePoem />} />
            <Route path={routeList.POEMS} element={<PoemList />} />
        </Route>
      </Routes>
    </BrowserRouter>
)

export default Router