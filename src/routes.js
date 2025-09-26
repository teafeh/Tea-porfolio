import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import LandingPage from './pages';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true, // 
        Component: Home,
      },
      {
        path: 'case-studies',
        Component: CaseStudies,
      },
      {
        path: 'case-studies/hotel-superbrain',
        Component: CaseStudyDetail,
      },
    ],
  },
]);