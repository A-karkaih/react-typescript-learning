import { useState } from "react";

export interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Person) => {
  const [showInfo, setIsShowInfo] = useState<boolean | null>(false);
  const toggleInfo = () => setIsShowInfo((prev) => !prev);
  return (
    <div>
      {showInfo && (
        <>
          <p>Name: {props.name}</p>
          <p> Age: {props.age} </p>
          <p>This person is {props.isMarried ? "💍 Married" : "🙂 Single"}</p>
        </>
      )}
      <button onClick={toggleInfo}> Toggle Info</button>
    </div>
  );
};
