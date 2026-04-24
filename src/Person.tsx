import { use, useState } from "react";

export interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Person) => {
  const [personBio, setPersonBio] = useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <p>Name: {props.name}</p>
      <p> Age: {props.age} </p>
      <p>This person is {props.isMarried ? "💍 Married" : "🙂 Single"}</p>

      <p>
        {props.name} Bio: {!personBio ? "No Bio" : personBio}{" "}
      </p>
      <input onChange={handleChange}  />
    </div>
  );
};
