import React, { useState } from "react"
import Modal from "../shared/ui/modal"

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Create task</button>
      <Modal
        isOpen={isOpen}
        onVisibilityChange={setIsOpen}
      />
    </div>
  )
}
