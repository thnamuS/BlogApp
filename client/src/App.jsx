import './App.css'
import Layout from './Layout';
import { Route, Routes } from "react-router-dom";
import Indexpage from './pages/indexpage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/registerpage';
import { UserContextProvider } from './usercontext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Indexpage/>} />
      <Route path={'/login'} element={<Loginpage/>}/>
      <Route path={'/register'} element={<Registerpage/>}/>
      <Route path={'/create'} element={<CreatePost/>}/>
      <Route path={'/post/:id'} element={<PostPage/>}/>
      <Route path="/edit/:id" element={<EditPost />} />
      </Route>
    </Routes>
    </UserContextProvider>
    
  );
}

export default App
 