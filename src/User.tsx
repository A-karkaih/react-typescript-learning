import { useContext } from "react";
import { UserContext } from "./UserContextProvide";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

export const User = (props: Props) => {
  const { users, updateUser, deleteUser, addUser } = useContext(UserContext);
  return (
    <div>
      <p>Name: {props.name}</p>
      <p> Age: {props.age} </p>
      <p>This person is {props.isMarried ? "💍 Married" : "🙂 Single"}</p>
    </div>
  );
};
