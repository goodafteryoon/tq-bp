import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Countries from './components/Countries';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1>Hello Proper UseQuery Hooks</h1>
        <Countries />
      </main>
    </QueryClientProvider>
  );
}

export default App;
