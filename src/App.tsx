import { Person } from "./Person";

export const App = () => {
  return (
    <>
      <Person name={"achraf"} age={26} isMarried={true} />
      <Person name={"chirok"} age={20} isMarried={false} />
    </>
  );
};
