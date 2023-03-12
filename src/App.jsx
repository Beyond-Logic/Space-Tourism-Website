import LoadingOverlay from "./layouts/LoadingOverlay";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <LoadingOverlay>
        <Router />
      </LoadingOverlay>
    </>
  );
}

export default App;
