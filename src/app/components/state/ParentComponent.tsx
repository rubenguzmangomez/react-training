'use client'

import { useState } from "react"
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {

  const [message, setMessage] = useState("Hello from the Parent Component!");

  const updateMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  return(
    <div>
      <h1>Parent component</h1>
      <ChildComponent message={message} updateMessage={updateMessage}/>
    </div>
  )
}

export default ParentComponent