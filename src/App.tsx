import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routers} />
    </Suspense>
  );
};

export default App;
