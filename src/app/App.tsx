import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/about">
              <main>About</main>
            </Route>
            <Route path="/">
              <main>Home</main>
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
