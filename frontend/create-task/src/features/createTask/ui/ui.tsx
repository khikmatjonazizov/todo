import React, { ComponentProps, useState } from "react";
import Modal from "../../../shared/ui/modal";
import cns from './ui.module.css';
import { tasksApi } from 'api'

export const CreateTask: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [taskDesc, setTaskDesc] = useState('');
  const [taskDone, setTaskDone] = useState(false);

  const handleTaskDesc: ComponentProps<'input'>['onChange'] = (event) => {
    const target = event.target;
    setTaskDesc(target.value);
  }

  const handleTaskDone: ComponentProps<'input'>['onChange'] = (event) => {
    const target = event.target;
    setTaskDone(target.checked)
  }

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault();
    tasksApi.create({
      desc: taskDesc,
      done: taskDone,
    })
  }

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