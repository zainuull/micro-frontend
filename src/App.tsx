import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';

import { DetailPost } from './Features/Home/DetailPost/DetailPost';
import { Home } from './Features/Home/Home';
import './style.css';

export const App = () => {
  return (
    <div className="w-full">
      <h1 className='text-6xl font-bold'>Hello world</h1>
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPost />} />
        </Routes> */}
    </div>
  );
};

class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define('react-element', ReactMfe);
