import {Tag} from "./Tag.jsx";
import {useState} from "react";

export const TaskForm = ({setTasks, deleteTask}) => {

  const [taskData, setTaskData] = useState({
    title: '',
    status: '',
    limitDate: '',
    tags: []
  });

  const selectTag = (tagName) => {

    const alreadyExistis = taskData.tags.some(item => item === tagName);

    if(alreadyExistis) {
      const uniqueTags = taskData.tags.filter(item => item !== tagName);
      setTaskData(prev => {
        return {...prev, tags: uniqueTags};
      })
    }
    else {
      setTaskData(prev => {
        return {...prev, tags: [...prev.tags, tagName]};
      })
    }
  }

  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag);
  }

  const taskChange = (e) => {

    const {name, value} = e.target;
    //console.log('{[name]: value} => ', {[name]: value} );

    setTaskData(prev => {
      return {...prev, [name]: value}
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    setTasks(prev => {
      return [...prev, taskData];
    })
    console.log('taskData => ', taskData);
    setTaskData({
      title: '',
      status: '',
      limitDate: '',
      tags: []
    });
  }


  return (
    <div id='TaskForm' className="flex w-full">

      <header className="flex w-full items-center justify-center">
        <form onSubmit={formSubmit} className="flex flex-col gap-3 py-3 w-full">

          <input name="title" type="text" placeholder="Task Title"
                 value={taskData.title} onChange={taskChange} />

          <div className="flex w-full gap-3 flex-wrap">
            <input name="limitDate" type="text" placeholder="Limit Date"
                   value={taskData.limitDate} onChange={taskChange} />
            <select name="status" value={taskData.status} onChange={taskChange}>
              <option value="">status</option>
              <option value="To Do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}  />
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag tagName="Javascript" selectTag={selectTag} selected={checkTag("Javascript")} />
            <Tag tagName="Typescript" selectTag={selectTag} selected={checkTag("Typescript")} />
          </div>

          <button type="submit">+ Add Task</button>
        </form>
      </header>

    </div>
  )
}