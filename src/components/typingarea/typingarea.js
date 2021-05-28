import React, { useEffect, useRef } from "react";
import "./style.css";
import { useState } from "react";
import randomWords from "random-words";
import Header from "../header/header";
import { useDispatch } from "react-redux";
import axios from "axios";
function Typingarea() {
  const startbutton = useRef();
  const firstdiv = useRef();
  const seconddiv = useRef();
  var [crct, setcrct] = useState(0);
  var [wrong, setwrong] = useState(0);
  var [timer, settimer] = useState(0);
  var [prev, setprev] = useState("Click start");
  var [curr, setcurr] = useState("to");
  var [next, setnext] = useState("start test");
  var [typedword, settypedword] = useState("");
  const dispatch = useDispatch();
  var inputref = useRef();
  var timerref = useRef(0);
  const [isRunning, setisrunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      dispatch({ type: "setmatch", payload: { crct, wrong } });
      let token = `Bearer ${localStorage.getItem("typingtool-token")}`;
      let accuracy = crct + wrong === 0 ? 0 : (crct / (crct + wrong)) * 100;
      let wpm = crct * 6;
      async function postdata() {
        await axios.post(
          "http://localhost:5000/users/userinfopost",
          {
            typingmatches: {
              accuracy,
              wpm,
            },
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
      }
      postdata();
    }
  }, [isRunning, crct, wrong, dispatch]);

  const startagainclickhandler = () => {
    startbutton.current.style.display = "inline-block";
    console.log(timerref.current);
    timerref.current.innerText = "0";
    settimer(0);
    setprev("");
    setcurr(randomWords());
    setnext(randomWords());
    setcrct(0);
    setwrong(0);
    settypedword("");
    setisrunning(true);

    firstdiv.current.style.display = "block";
    seconddiv.current.style.display = "none";
  };
  const clickhandler = async (e) => {
    setisrunning(true);
    startbutton.current.style.display = "none";
    inputref.current.focus();
    setprev("");
    setcurr(randomWords());
    setnext(randomWords());
    for (let i = 1; i <= 10; i++) {
      settimer(i);
      console.log(i);
      await new Promise((res) => {
        setTimeout(res, 1000);
      });
    }
    firstdiv.current.style.display = "none";
    seconddiv.current.style.display = "block";
    console.log(crct, wrong);

    return true;
  };
  const keypresshandler = async (e) => {
    if (
      e.key === "Enter" ||
      (e.key === " " && typedword.trim() !== "" && typedword !== undefined)
    ) {
      if (typedword.trim() === curr.trim()) {
        setcrct(crct + 1);
      } else {
        setwrong(wrong + 1);
      }
      await setprev(curr);
      await setcurr(next);
      await setnext(randomWords());
      settypedword("");
    }
  };

  return (
    <div className="topdiv">
      <Header />
      <h1 className="timer" ref={timerref}>
        {timer}
      </h1>
      <div ref={firstdiv} className="firstdiv">
        <div className="wordsdisplaydiv">
          <h2>{prev}</h2>
          <h1>{curr}</h1>
          <h2>{next}</h2>
        </div>
        <div className="inputstart">
          <input
            className="typinginput"
            ref={inputref}
            value={typedword}
            onChange={(e) => {
              settypedword(e.currentTarget.value);
            }}
            onKeyPress={keypresshandler}
          ></input>
          <button
            ref={startbutton}
            className="startbutton"
            onClick={() => {
              clickhandler().then(() => {
                setisrunning(false);
                console.log("abcd");
              });
            }}
          >
            start
          </button>
        </div>
      </div>
      <div style={{ display: "none" }} className="seconddiv" ref={seconddiv}>
        <div className="resultdisplay">
          <h1>WPM:{crct * 6}</h1>
          <h1>ACCURACY:{(crct / (crct + wrong)) * 100}</h1>
        </div>
        <button className="startagainbutton" onClick={startagainclickhandler}>
          try again
        </button>
      </div>
    </div>
  );
}

export default Typingarea;
