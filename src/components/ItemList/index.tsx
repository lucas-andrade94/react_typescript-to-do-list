import { useState } from "react";

import { Item } from "../../types/Item";
import { Container, ItemContainer } from "./styles";

type Props = {
  item: Item;
  onRemove: (id: string) => void;
};

const ListItem = ({ item, onRemove }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onRemove(item.id);
  };

  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(event) => {
          setIsChecked(event.target.checked);
          item.done = event.target.checked;
        }}
      />
      <ItemContainer>
        <label>{item.name}</label>
        <button onClick={buttonHandler}>Remove</button>
      </ItemContainer>
    </Container>
  );
};

export default ListItem;
