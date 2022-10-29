import { QueryClient, QueryClientProvider } from "react-query";
import ContainerGallery from "./components/ContainerGallery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ContainerGallery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
