import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-3xl font-bold">React 学習のための小さなアプリ</h1>
      <ul className="list-disc pl-5">
        <li><Link to='/' className="underline">Home</Link></li>
        <li>
          <Link to='/studymnt' className="underline">MENTA 課題</Link>
          <ul className="list-disc pl-5">
            <li>
              React 編
              <ul className="list-disc pl-5">
                <li><Link to='/basicjsx' className="underline">JSX の基本</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><Link to='/about' className="underline">About</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;