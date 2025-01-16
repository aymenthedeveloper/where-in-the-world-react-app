
import Header from "./components/Header"
import Main from "./components/Main";
import data from './assets/data.json'

function App() {
  const indexedData = data.map((country, i) => {
    country.id = i;
    return country;
  })
  console.log(indexedData);
  
  return (
    <div className="wrapper">
      <Header/>
      <Main data={indexedData} />
    </div>
  )
}

export default App
