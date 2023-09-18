import { useDispatch } from "react-redux";
import "./endGameMessage.css";
import { resetEndGame } from "../store/thunk/thunk";

export default function EndGameMessage({ userStatus }) {
  const dispatch = useDispatch();
  const onclickHandler = () => {
    dispatch(resetEndGame());
  };
  return (
    <div className='end-game-message'>
      <h1>{userStatus ? "You Win!" : "You Lose!"}</h1>
      <button
        style={{ fontSize: "17px", padding: "20px" }}
        data-testid='reset-button'
        onClick={onclickHandler}
      >
        Restart Game
      </button>
    </div>
  );
}
