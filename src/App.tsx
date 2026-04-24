import { User, Countries } from "./User";

export const App = () => {
  return (
    <>
      <User name={"achraf"} age={26} isMarried={true} country={Countries.Usa} />
      <User
        name={"chirok"}
        age={20}
        isMarried={false}
        country={Countries.Brazil}
      />
    </>
  );
};
