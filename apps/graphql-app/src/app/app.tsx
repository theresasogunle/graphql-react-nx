import { ApolloProvider } from '@apollo/react-hooks';
import { SetForm, SetList } from '@nx-apollo-react-example/feature-sets';
import ApolloClient from 'apollo-boost';
import './app.css';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
});

const App = () => (
  <ApolloProvider client={client as any}>
    <h1>My Lego Sets</h1>
    <div className="flex">
      <SetForm />
      <SetList />
    </div>
  </ApolloProvider>
);

export default App;
