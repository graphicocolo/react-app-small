import { Link } from 'react-router-dom';
import Login from '@/components/Login';
import { useAuth } from '@/hooks/useAuth';

const Navigation = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-3xl font-bold">React 学習のための小さなアプリ</h1>
      <Login />
      <ul className="list-disc pl-5">
        <li><Link to='/' className="underline">Home</Link></li>
        <li>
          <Link to='/studymnt' className="underline">MENTA 課題</Link>
          <ul className="list-disc pl-5">
            <li>
              React 編
              <ul className="list-disc pl-5">
                <li><Link to='/basicjsx' className="underline">Reactの基本</Link></li>
                <li>基礎応用<br /><Link to='/fetchapi1' className="underline">fetch APIを使ったデータ取得1（APIから最大10件のTODOデータを取得・表示）</Link></li>
                <li><Link to='/fetchapi2' className="underline">fetch APIを使ったデータ取得2（https://jsonplaceholder.typicode.com/todos/idからデータ取得）<br />map の外側に詳細データ表示</Link></li>
                <li><Link to='/fetchapi3' className="underline">失敗例：fetch APIを使ったデータ取得3（https://jsonplaceholder.typicode.com/todos?_limit=10からデータ取得）<br />1つのボタンをクリックすると全ての詳細データが表示されてしまう</Link></li>
                <li><Link to='/fetchapi4' className="underline">fetch APIを使ったデータ取得4（https://jsonplaceholder.typicode.com/todos/idからデータ取得）</Link></li>
                <li><Link to='/fetchapi5' className="underline">APIエンドポイントから10件のTODOリストを取得し一覧表示、リストのアイテムをクリックすると、そのアイテムの詳細情報を別のコンポーネントで表示</Link></li>
                <li><Link to='/customhooks1' className="underline">カスタムフック例：カウンター、モーダル</Link></li>
                <li><Link to='/private' className="underline">ログインユーザー用ページ</Link>{!isAuthenticated && <span className="pl-5 text-red-700">ログインユーザー専用ページ</span>}</li>
                <li><Link to='/usememo' className="underline">useMemo例</Link></li>
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