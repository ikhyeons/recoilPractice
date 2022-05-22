import {
  atom,
  useRecoilValue,
  RecoilRoot,
} from 'recoil'

import TodoList from './AtomAndSelector/TodoList';


function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TodoList/>
      </RecoilRoot>
    </div>
  );
}

export default App;
