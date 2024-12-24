import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-3xl font-bold">React 学習のための小さなアプリ</h1>
      <Link to='/'>Home</Link>
      <Link to='/studymnt'>MENTA 課題</Link>
      <div>About</div>
    </div>
  )
}

export default About;