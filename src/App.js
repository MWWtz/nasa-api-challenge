import { QueryClient, QueryClientProvider } from "react-query";

import GalleryContainer from "./components/GalleryContainer";
import "./App.scss";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GalleryContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
