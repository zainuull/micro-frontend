import { PostData, PutData } from '../data/data.post';
import useStore from '../../../store';

export const UpdateForm = () => {
  const [form, setForm]: any = useStore();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let title = event.target.value;
    const timeStamp = new Date().getTime();
    if (form.isUpdate) {
      setForm({
        ...form,
        title: title,
      });
    } else {
      setForm({
        ...form,
        id: timeStamp,
        title: title,
      });
    }
  };

  const handleAreChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    let body = event.target.value;
    setForm({
      ...form,
      body: body,
    });
  };

  const handleSubmit = async () => {
    console.log(form)
    if (form.isUpdate) {
      await PutData(form.id, form);
    } else {
      await PostData(form);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <h1 className="text-6xl font-bold">Update Form</h1>
      <div className="border border-black bg-gray-200 rounded-lg p-10 w-1/2 text-lg font-semibold">
        <form className="flex flex-col gap-y-2">
          <label htmlFor="title">Title</label>
          <input id="title" value={form?.title} className="rounded-lg px-2 py-1" onChange={handleChange} />
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea id="deskripsi" value={form?.body} className="rounded-lg px-2" onChange={handleAreChange} />
        </form>
        <button onClick={handleSubmit} className="w-full py-2 bg-green-600 text-white text-xl font-semibold rounded-lg hover:bg-green-800 transition mt-6">
          Submit
        </button>
      </div>
    </div>
  );
};
