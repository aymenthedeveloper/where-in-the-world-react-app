import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./components/NotFound";
import CountryDetails from "./components/CountryDetails";
import SharedLayout from "./components/SharedLayout";


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Main/>} />
            <Route path="/:targetCountry" element={<CountryDetails/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
