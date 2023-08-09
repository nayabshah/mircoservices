import app from '../api/build-client';
const App = ({ currentUser }) => {
  // console.log(currentUser);
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

App.getInitialProps = async (context) => {
  const { data } = await app(context).get('/api/users/current-user');
  return data;
};

export default App;
