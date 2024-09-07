import Header from "./Components/Header";
import Items from "./Components/Items";
import SideBar from "./Components/SideBar";
import { UserProgressContextProvider } from "./Context/userProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
        <div className=" flex items-center flex-col ">
          <Header />
          <Items />
          <SideBar />
        </div>
    </UserProgressContextProvider>
  );
}

export default App;
