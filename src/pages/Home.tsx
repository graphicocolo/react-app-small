import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <div>Home</div>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home;