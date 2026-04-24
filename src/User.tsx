// eslint-disable-next-line react-refresh/only-export-components
export enum Countries {
  Brazil = "Brazil",
  Morocco = "Morocco",
  Usa = "United state of america",
}
interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

export const User = (props: Props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p> Age: {props.age} </p>
      <p>Country: {props.country}</p>
      <p>This person is {props.isMarried ? "💍 Married" : "🙂 Single"}</p>
    </div>
  );
};
