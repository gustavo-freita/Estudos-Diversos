import MeuPrimeiroComponente from "./assets/meusComponentes/components"

function App() {

  return (
    <div>
      <h1>Hello React</h1>
      <MeuPrimeiroComponente/>
      <MeuBotao conteudo='Hue hue 2'/>
      <MeuBotao conteudo='Hue hue 3'/>
      <MeuBotao conteudo='Hue hue 4'/>
    </div>
  )
}

function MeuBotao(props) {
  return (
    <button>{props.conteudo}</button>
  )
}

export default App
