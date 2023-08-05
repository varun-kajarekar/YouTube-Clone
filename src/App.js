import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {NavBar,Feed,SearchFeed,VideoDetail,ChannelDetail ,Subscriptions} from './Component';
import { useSession, useSupabaseClient} from '@supabase/auth-helpers-react'




function App() {
  const session = useSession();
  const supabase = useSupabaseClient();


  return (
    <BrowserRouter>
        <NavBar session = {session} supabase = {supabase}/>
        <Routes>
          <Route path='/' exact element={<Feed/>}></Route>
          <Route path='/video/:id'  element={<VideoDetail/>}></Route>
          <Route path='/channel/:id' element={<ChannelDetail/>}></Route>
          <Route path='/Subscriptions' element={<Subscriptions session = {session} supabase = {supabase}/> }></Route>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}></Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
