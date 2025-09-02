import { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center gap-4 p-6 bg-slate-100 rounded-xl shadow-lg'>
        <button
          className='w-48 px-4 py-2 font-bold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 active:scale-95 transition-transform'
          onClick={() => setCount(count => count + 1)}
        >
          Incrementar
        </button>

        <div className='px-10 py-4 text-5xl font-mono font-extrabold text-slate-800 bg-white rounded-lg shadow-inner'>
          {count}
        </div>

        <button
          className='w-48 px-4 py-2 font-bold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 active:scale-95 transition-transform'
          onClick={() => setCount(count => count - 1)}
        >
          Disminuir
        </button>
      </div>
    </>
  )
}

export default Counter
