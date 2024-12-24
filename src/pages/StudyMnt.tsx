import { Link } from 'react-router-dom';

const StudyMnt = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-3xl font-bold">React 学習のための小さなアプリ</h1>
      <Link to='/'>Home</Link>
      <div>MENTA 課題</div>
        <ul>
          <li>React 編</li>
            <ul>
              <li><Link to='/basicjsx'>JSX の基本</Link></li>
            </ul>
        </ul>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default StudyMnt;