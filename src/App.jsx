import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { useContext } from 'react';

function App() {
  useContext;
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto pd-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
