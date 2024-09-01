import React from "react";
import Modal from "../../../shared/ui/modal";
import cns from './ui.module.css';
import { useCreateTask } from "../model";


export const CreateTask: React.FC = () => {
  const {
    isOpen,
    taskDesc,
    taskDone,
    setIsOpen,
    handleSubmit,
    handleTaskDesc,
    handleTaskDone,
  } = useCreateTask();

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Create task</button>
      <Modal
        isOpen={isOpen}
        onVisibilityChange={setIsOpen}
      >
        <form
          className={cns['create-task__form']}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={taskDesc}
            onChange={handleTaskDesc}
            className={cns['create-task__form-input']}
            required
            placeholder="desc"
          />
          <label className={cns['create-task__form-label']}>
            <input
              type="checkbox"
              onChange={handleTaskDone}
              checked={taskDone}
            />
            done
          </label>
          <button className={cns['create-task__form-submit']}>Create task</button>
        </form>
      </Modal>
    </>
  )
}