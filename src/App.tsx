import { useState } from "react";

import * as Style from "./App.styles";
import { Item } from "./types/Item";
import ListItem from "./components/ItemList";
import NewTask from "./components/NewTask";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleNewTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: Math.random().toString(16),
      name: taskName,
      done: false,
    });

    setList(newList);
  };

  const handleRemoveItem = (id: string) => {
    const newList = [...list];
    const listFiltered = newList.filter((item) => item.id !== id);
    setList(listFiltered);
  };

  return (
    <Style.Container>
      <Style.Content>
        <Style.Header>To Do List</Style.Header>
        <NewTask onFinish={handleNewTask} />
        {list.map((item, index) => {
          return (
            <ListItem key={index} item={item} onRemove={handleRemoveItem} />
          );
        })}
      </Style.Content>
    </Style.Container>
  );
};

export default App;
