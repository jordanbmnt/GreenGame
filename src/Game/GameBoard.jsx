import { useDispatch, useSelector } from "react-redux";
import "./gameBoard.css";
import { useEffect, useState, useRef } from "react";
import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  toggleCharacterMovement,
} from "../store/reducers/characterMovementReducerSlice";
import { decrement } from "../store/reducers/timerSlice";
import EndGameMessage from "../EndGameMessage/EndGameMessage";
import {
  toggleUserSuccess,
  toggleVisibility,
} from "../store/reducers/congratulationsMessageSlice";
import { resetEndGame, resetStartGame } from "../store/thunk/thunk";
import { blockMaker, clearBoard } from "../utilities/gameBoard-utils";

export default function GameBoard({ width, height }) {
  const canvasRef = useRef(HTMLCanvasElement);
  const [context, setContext] = useState(null);
  const dispatch = useDispatch();
  const charPos = useSelector((state) => state.movementReducer.characterPos);
  const greenPos = useSelector((state) => state.movementReducer.greenPos);
  const borderPos = useSelector((state) => state.movementReducer.borderPos);
  const blockerPos = useSelector((state) => state.movementReducer.blockerPos);
  const score = useSelector((state) => state.scoreReducer.score);
  const time = useSelector((state) => state.timeReducer.time);
  const startTime = useSelector((state) => state.timeReducer.startTime);
  const msgVisibility = useSelector(
    (state) => state.congratulationsMessageReducer.visible
  );
  const userSuccess = useSelector(
    (state) => state.congratulationsMessageReducer.userSuccess
  );

  useEffect(() => {
    const handlePress = (event) => {
      if (event.key === "w" || event.key === "ArrowUp") {
        dispatch(moveUp());
      }
      if (event.key === "s" || event.key === "ArrowDown") {
        dispatch(moveDown());
      }
      if (event.key === "a" || event.key === "ArrowLeft") dispatch(moveLeft());
      if (event.key === "d" || event.key === "ArrowRight")
        dispatch(moveRight());
    };
    window.removeEventListener("keydown", handlePress);
    window.addEventListener("keydown", handlePress);
    return;
  }, [dispatch]);

  useEffect(() => {
    setContext(canvasRef.current.getContext("2d"));
    if (context) {
      clearBoard(context);
      greenPos.forEach((pos) => {
        blockMaker(context, pos, "#12d122", "#a1e87d");
      });
      borderPos.forEach((pos) => {
        blockMaker(context, pos, "#121212", "#a1e87d");
      });
      blockerPos.forEach((pos) => {
        blockMaker(context, pos, "#121b0e", "#364e2a");
      });
      blockMaker(context, charPos, "#12d2d2", "#a1e87d");
    }
    return;
  }, [blockerPos, borderPos, charPos, context, dispatch, greenPos]);

  const onclickHandler = () => {
    dispatch(resetStartGame());
  };

  useEffect(() => {
    if (score < 4) {
      if (time > 0 && startTime) {
        const interval = setInterval(() => {
          dispatch(decrement());
        }, 1000);
        return () => clearInterval(interval);
      } else if (time === 0) {
        dispatch(toggleVisibility());
        dispatch(toggleUserSuccess(false));
        dispatch(toggleCharacterMovement());
      }
    } else {
      dispatch(resetEndGame("--"));
    }
  }, [dispatch, score, startTime, time]);

  return (
    <div id='game-ground'>
      {msgVisibility && <EndGameMessage userStatus={userSuccess} />}
      <div data-testid='user-info' id='userScore'>
        <p className='user-game-info' style={{ color: "#D7B8B7" }}>
          Time: {time}s
        </p>
        <p className='user-game-info'>Score: {score}</p>
      </div>
      {!msgVisibility && (
        <button
          data-testid='start-toggle'
          type='button'
          onClick={onclickHandler}
        >
          {startTime ? "Restart" : "Start"}
        </button>
      )}
      <canvas
        ref={canvasRef}
        className='ground'
        data-testid='canvas'
        width={width}
        height={height}
      />
    </div>
  );
}
