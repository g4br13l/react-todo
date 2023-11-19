import {TaskForm} from "./components/TaskForm.jsx";
import {HeaderApp} from "./components/layout/HeaderApp.jsx";
import task_icon from "./assets/task_logo.png";
import {TaskCard} from "./components/TaskCard.jsx";
import {useEffect, useState} from "react";


function App() {

  const oldTasks = localStorage.getItem('tasks');
  console.log('localStorage.oldTasks =>', JSON.parse(oldTasks));

  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  console.log('app.tasks => ', tasks);

  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('useEffect runs');
  }, [tasks]);
  

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }


  return (
    <div id="app" className='flex flex-col items-center gap-4'>

      <HeaderApp image={task_icon} text="To Do App" />

      <div id="app_container"
           className="flex max-w-7xl flex-col px-6 w-full gap-4 justify-center md:flex-row md:gap-10 md:px-12">

        <TaskForm setTasks={setTasks} />

        <main id="main_app" className="flex flex-col w-full gap-3">
          {tasks.map((task, index) => {
            if (task) {
              return <TaskCard key={index} index={index} task={task} deleteTask={deleteTask} />
            }
            else {
              return <h2 key={index}>Nothing here</h2>
            }
          })}
        </main>

      </div>

    </div>
  )
}

export default App
