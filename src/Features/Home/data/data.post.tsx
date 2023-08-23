import axios from 'axios';
import useStore from '../../../store';

type GetPostType = (data: any) => void;

export const GetPost = (data: GetPostType) => {
  axios
    .get('http://localhost:3000/posts?_sort=id&_order=desc')
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const RemovePost = (id: number) => {
  axios.delete(`http://localhost:3000/posts/${id}`);
};

export const PostData = (data: any) => {
  axios
    .post(`http://localhost:3000/posts?_sort=id&_order=desc`, data)
    .then((res) => {
    })
    .catch((err) => {
      console.log(err);
    });
};

export const PutData = (id: number, data: any) => {
  axios
    .put(`http://localhost:3000/posts/${id}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
