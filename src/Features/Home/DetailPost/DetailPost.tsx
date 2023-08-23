import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GetPost } from '../data/data.post';
import foto from '../../../assets/foto.jpg';

export const DetailPost = () => {
  const { id }: any = useParams();
  const [datas, setDatas]: any = useState([]);

  useEffect(() => {
    GetPost((data) => {
      setDatas(data);
    });
  }, []);

  const posts: any = datas.find((post: any) => {
    return post.id == parseInt(id);
  });
  

  return (
    <div className="w-full">
      <div className='w-full'>
        <img src={foto} className="w-full h-[700px] object-cover" />
      </div>
      <h1 className="text-6xl font-bold">{posts?.title}</h1>
      <p>{posts?.body}</p>
    </div>
  );
};
