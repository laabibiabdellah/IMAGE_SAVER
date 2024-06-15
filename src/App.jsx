import SaveImgs from "./components/SaveImgs";
import ListOfImgs from "./components/ListOfImgs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import { store } from "./components/Redux/srore";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<ListOfImgs />} />
            <Route path="/saved" element={<SaveImgs />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
