// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//
//
// http://owu.linkpc.net/carsAPI/v1/doc
// Реалізувати створення, видалення та оновлення машин




import Users from "./components/users/Users";
import Cars from "./components/Cars/Cars";

const App = () => {

  return (
      <div>
        <Users/>
        {/*{<Cars/>}*/}
      </div>
  );
}

export default App;

