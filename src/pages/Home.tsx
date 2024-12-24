import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-3xl font-bold">React 学習のための小さなアプリ</h1>
      <div>Home</div>
      <Link to='/studymnt'>MENTA 課題</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home;