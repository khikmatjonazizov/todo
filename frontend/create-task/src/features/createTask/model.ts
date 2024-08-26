import { ComponentProps, useState } from "react";
import { createTaskFx } from 'host/store/tasks'

export const useCreateTask = () => {
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

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = async (event) => {
    event.preventDefault();
    await createTaskFx({
      desc: taskDesc,
      done: taskDone,
    })
    setIsOpen(false)
    setTaskDesc('')
    setTaskDone(false)
  }
  return {
    isOpen,
    taskDesc,
    taskDone,
    setIsOpen,
    handleTaskDesc,
    handleTaskDone,
    handleSubmit,
  }
}