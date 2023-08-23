import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetPost, RemovePost } from '../data/data.post';
import foto from '../../../assets/foto.jpg';
import useStore from '../../../store';

export const Posts = () => {
  const [datas, setDatas]: any = useState([]);
  const [store, setStore]: any = useStore();

  useEffect(() => {
    GetPost((data) => {
      setDatas(data);
    });
  }, [datas]);

  const handleDelete = (id: number) => {
    RemovePost(id);
  };

  const handleUpdate = (data: any) => {
    data.isUpdate = true;
    setStore(data);
    console.log(data)
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-6xl font-bold mt-24 mb-12">Home</h1>
      <div className="flex flex-wrap w-full gap-4 justify-evenly">
        {datas.length > 0 &&
          datas.map((data: any) => (
            <div key={data.id} className="w-[400px] border-2 border-black">
              <img src={foto} className="object-cover" />
              <div className="p-4">
                <Link to={`/detail/${data.id}`}>
                  <h1 className="text-xl font-semibold hover:text-blue-800 transition">{data.title?.substring(0, 10)}</h1>
                </Link>
                <p>{data.body?.substring(0, 100)} ....</p>
                <div className="w-full flex justify-between gap-x-2 mt-4">
                  <button onClick={() => handleDelete(data.id)} className="w-full py-1 bg-red-600 text-white text-xl font-semibold rounded-lg hover:bg-red-800 transition">
                    Delete
                  </button>
                  <button onClick={() => handleUpdate(data)} className="w-full py-1 bg-green-600 text-white text-xl font-semibold rounded-lg hover:bg-green-800 transition">
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
