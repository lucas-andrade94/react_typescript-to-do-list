import { useState, KeyboardEvent } from "react";

import { Container } from "./styles";

type Props = {
  onFinish: (taskName: string) => void;
};

const NewTask = ({ onFinish }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (event: KeyboardEvent) => {
    if (
      (event.code === "Enter" || event.code === "NumpadEnter") &&
      inputText !== ""
    ) {
      onFinish(inputText);
      setInputText("");
    }
  };

  return (
    <Container>
      <div className="image">+</div>
      <input
        type="text"
        placeholder="Add a new task"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
};

export default NewTask;
