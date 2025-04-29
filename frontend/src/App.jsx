import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>

    <div className="App justify-center text-center font-bold py-10">
      <h1 className='text-red-400'>WELCOME TO SAYLANI MASS IT TRAINNING SYSTEM</h1>
      <p>
          <Link to={'login'}>Already have an account? </Link><Link to={'register'}>Sign up</Link>
        </p>
    </div>
    </>
  );
}

export default App;
