import Navigation from '@/components/Navigation';
// import LoggedIn from '@/components/LoggedIn';

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col p-5">
        <h2 className="text-2xl font-bold">トップページ</h2>
        {/* <LoggedIn /> */}
      </div>
    </>
  )
}

export default Home;