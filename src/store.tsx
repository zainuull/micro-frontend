import { atom, useAtom } from 'jotai';

const store = atom({
  userId: 1,
  id: 1,
  title: "",
  body: "",
  isUpdate : false
});

const useStore = () => useAtom(store);

export default useStore;
