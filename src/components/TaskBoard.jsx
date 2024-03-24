import { useState } from "react";
import ActionTask from "./taskBoard/ActionTask";
import ListTask from "./taskBoard/ListTask";
import ModalTask from "./taskBoard/ModalTask";
import SearchTask from "./taskBoard/SearchTask";

const TaskBoard = () => {
  const taskList = {
    id: crypto.randomUUID(),
    title: "Game Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    tags: ["Unity", "C#", "Graphic"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([taskList]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return newTask;
        })
      );
    }

    setShowAddModal(false);
  }

  function handleEditTask(editTask) {
    setTaskToUpdate(editTask);
    setShowAddModal(true);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <ModalTask onSave={handleAddTask} taskToUpdate={taskToUpdate} />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <ActionTask onAddClick={() => setShowAddModal(true)} />
          <ListTask tasks={tasks} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
