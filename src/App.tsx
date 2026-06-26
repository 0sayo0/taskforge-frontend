import { Toaster } from "sonner";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Toaster theme="dark" position="top-right" closeButton />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
