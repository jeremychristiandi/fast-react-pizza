import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
 const username = useSelector(state => state.user.username)

  return (
    <div className="my-10 sm:my-16 px-3 text-center">
      <h1 className="text-xl font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username.length ? <Button to="/menu" type="primary">See Menu</Button> : <CreateUser />}
    </div>
  );
}

export default Home;
