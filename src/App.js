// еще сделай еще небольшую правку в lesson4:
//
//     реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Layout from "./components/llayout/Layout";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import UserDetails from "./components/user-details/UserDetails";
import PostDetails from "./components/post-details/PostDetails";


function App() {
  return (
      <div>
          <div>
              <h2>menu</h2>
              <ul>
                  <li>
                      <Link to={'/'}>home</Link>
                  </li>
                  <li>
                      <Link to={'/layout'}>layout</Link>
                  </li>
                  <li>
                  <Link to={'/about'}>about</Link>
                  </li>
              </ul>
          </div>

          <div>
              <h2>view</h2>
              <Routes>
                  <Route path={'/'} element={<Home/>}/>>
                  <Route path={'/layout'} element={<Layout/>}>>
                      <Route path={'users'} element={<Users/>}>
                          <Route path={':id'} element={<UserDetails/>}/>
                      </Route>
                      <Route path={'posts'} element={<Posts/>}>
                          <Route path={':id'} element={<PostDetails/>}/>
                      </Route>
                  </Route>
                  <Route path={'/about'} element={<About/>}/>>
              </Routes>
          </div>



    </div>
  );
}

export default App;
