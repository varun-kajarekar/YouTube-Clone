import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {Box} from '@mui/material';

import {NavBar,Feed,SearchFeed,VideoDetail,ChannelDetail} from './Component';




function App() {
  return (
    <BrowserRouter>
      <Box >
        <NavBar/>

        <Routes>
          <Route path='/' exact element={<Feed/>}></Route>
          <Route path='/video/:id'  element={<VideoDetail/>}></Route>
          <Route path='/channel/:id' element={<ChannelDetail/>}></Route>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}></Route>
        </Routes>

      </Box>
    
    
    
    </BrowserRouter>
  );
}

export default App;
