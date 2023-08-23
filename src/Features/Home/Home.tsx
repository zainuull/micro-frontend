import { Posts } from './Posts/Posts';
import { UpdateForm } from './UpdateForm/UpdateForm';
import { useState } from 'react';

export const Home = () => {
  const [data, setData] : any = useState([])

  return (
    <div className="mt-12 flex flex-col items-center">
      <UpdateForm/>
      <Posts />
    </div>
  );
};
