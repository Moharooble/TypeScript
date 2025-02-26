import './App.css'

function App() {

  return (
    <div className="bg-gray-200 text-black text-center h-screen flex flex-col justify-center items-center">
      <div className="container h-[500px] w-[400px] bg-white p-3 rounded">
        <div className="form-todo flex justify-between items-center">
          <input className='p-2 rounded w-72 bg-gray-200 ' type="text" placeholder="Add a new todo" />
          <button className='p-2 w-20 bg-gray-200 rounded'>Add</button>
        </div>
        <div className="display mt-8">
          <div className="flex flex-row relative p-2 bg-gray-200 rounded items-center">
            <p className='flex w-78 justify-start'>I'm going to University in afternoon</p>
            <span className='absolute right-2 bg-red-400 py-1 px-2 rounded'>delete</span>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default App
