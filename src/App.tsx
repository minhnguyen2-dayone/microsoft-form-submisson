import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApplicantForm } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <SharePointColumns /> */}
      <ApplicantForm />
    </QueryClientProvider>
  );
}

export default App;
