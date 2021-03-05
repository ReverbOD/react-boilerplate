import React from 'react'
import reactDOM from 'react-dom'
import './App.scss'
import Logo from './assets/img/reactjs-fill.svg'

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20'>
        <div>
          Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass,
          with a hot dev server and an optimized production build.
          <div className={'bg-red-500 text-white'}>
            process.env.API_URL:{process.env.API_URL} !!! Make sure to put both
            .env.* files in gitignore.
          </div>
          <div className={'container mx-auto px-4'}>
            <Logo className={'mt-10 px-10'} />
          </div>
        </div>
      </div>
    </div>
  )
}

reactDOM.render(<App />, document.getElementById('root'))
