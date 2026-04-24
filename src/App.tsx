import { User } from "./User";

export const App = () => {
  return (
    <UserProvider>
      <User name={"achraf"} age={26} isMarried={true} />
      <User name={"chirok"} age={20} isMarried={false} />
    </UserProvider>
  );
};
