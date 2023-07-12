import { useSelector, useDispatch } from 'react-redux';

function App() {

  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleTest = e => {
    dispatch({ type: "USER_LOAD_REQUEST", payload: "hoho" })
  }

  return (
    <div className="App">
        app
        <button onClick={handleTest}>click me!</button>
        <p>{userState.loading && <span>loading 중</span>}</p>
        {userState.user.map((item, idx) => <li key={idx}>{item.title}</li>)}
    </div>
  );
}

export default App;
