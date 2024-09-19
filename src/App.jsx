import Router from './shared/Router.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />;
    </QueryClientProvider>
  );
};

export default App;
