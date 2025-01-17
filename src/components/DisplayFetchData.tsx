type Props = {
  id: string;
  title: string;
  completed: boolean;
}

// const DisplayFetchData = async ({id, title, completed}: Props) => {
const DisplayFetchData = ({...datas}: Props) => {
  return (
    <>
      <p>{datas.id}</p>
      <p>{datas.title}</p>
      <p>{datas.completed ? 'Completed' : 'Pending'}</p>
    </>
  );
}

export default DisplayFetchData;