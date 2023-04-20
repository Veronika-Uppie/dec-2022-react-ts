// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.

import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Comments from "./components/comments/Comments";
import Albums from "./components/albums/Albums";
import Todos from "./components/todos/Todos";
import TodosDetails from "./components/todos-details/TodosDetails";
import AlbumDetails from "./components/album-details/AlbumDetails";
import Post from "./components/post/Post";

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
          </ul>
        </div>

          <div>
              <h2>view</h2>
              <Routes>
                  <Route path={'/'} element={<Home/>}/>>

                  <Route path={'/layout'} element={<Layout/>}>>

                      <Route path={'todos'} element={<Todos/>}>
                          <Route path={':id'} element={<TodosDetails/>}/>
                      </Route>

                      <Route path={'albums'} element={<Albums/>}>
                          <Route path={':id'} element={<AlbumDetails/>}/>
                      </Route>


                      <Route path={'comments'} element={<Comments/>}>
                          <Route path={':postId'} element={<Post/>}/>
                      </Route>
                  </Route>


              </Routes>
          </div>



      </div>
  );
}

export default App;
