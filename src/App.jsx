import Counter from './components/counter'

function App() {
  return (
    <>
      <h1 className="text-semibold bg-teal-500 rounded text-3xl p-5 m-2 shadow text-center">CONTADOR</h1>
      <div className="card text-3xl text-center p-2 m-2">
          <Counter />
      </div>
    </>
  )
}

export default App
