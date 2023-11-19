import {MdOutlineDelete} from "react-icons/md";


export const TaskCard = ({task, index, deleteTask}) => {

  return (
    <div id="TaskCard" className="flex flex-col bg-white/10 border border-white/10 rounded-lg p-3 gap-2">

      <span>{task.title}</span>

      <div className="flex justify-between items-center">
        <div className="flex gap-3 flex-wrap">
          <label className="text-sm bg-slate-600 px-3 py-0.5 h-fit rounded-full w-fit text-white/50">
            {task.status}
          </label>
          <span className="text-sm text-slate-500">Limit: {task.limitDate}</span>
        </div>
        <button type="button"
                className="p-2 bg-slate-600" onClick={() => deleteTask(index)} >
          <MdOutlineDelete />
        </button>
      </div>

      <div className="flex mt-1 gap-1 flex-wrap">
        {task.tags.map(tagName => {
          return <label key={tagName} className={tagName}> {tagName} </label>
        })}
      </div>

    </div>
  )
}