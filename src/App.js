import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {NavBar,Feed,SearchFeed,VideoDetail,ChannelDetail} from './Component';




function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}></Route>
          <Route path='/video/:id'  element={<VideoDetail/>}></Route>
          <Route path='/channel/:id' element={<ChannelDetail/>}></Route>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
