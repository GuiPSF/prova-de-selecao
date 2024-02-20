import Header from "./components/header"
import Cadastro from "./components/cadastro"
import Lista from "./components/lista"
import Footer from "./components/footer"
import Sidebar from "./components/sidebar"
import { useState } from "react";

  
function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar setOpen={setOpen} open={open}/>
      <Header />
      <Cadastro setData={setData}/>
      <Lista itens={data}/>
      <Footer />
    </>
  )
}

export default App
