import { useRoutes } from "react-router-dom";
import Home from "../Pages/First/Home";
import Terms from "../Pages/Terms";
import TermsCo from "../Components/Terms/TermsCo";
import Privacy from "../Components/Terms/Privacy";
import Cookies from "../Components/Terms/Cookies";

function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      element: <Terms />,
      children: [
        {
          path: "/terms-and-condition",
          element: <TermsCo />,
        },
        {
          path: "/privacy-policy",
          element: <Privacy />,
        },
        {
          path: "/cookies-policy",
          element: <Cookies />,
        },
      ],
    },
  ]);

  return element;
}

export default Routes;