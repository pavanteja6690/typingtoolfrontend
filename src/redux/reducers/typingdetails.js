const initialstate = {
  typingmatches: [],
  sumaccuracy: 0,
  sumwpm: 0,
  cnt: 0,
};
export const typingdetails = (state = initialstate, { type, payload }) => {
  switch (type) {
    case "setdetails": //takes user
      let sumaccuracy = 0,
        sumwpm = 0,
        cnt = 0;
      payload.typingmatches.forEach((e) => {
        sumaccuracy += e.accuracy;
        sumwpm += e.wpm;
        cnt++;
      });
      return {
        typingmatches: payload.typingmatches,
        sumaccuracy: sumaccuracy,
        sumwpm: sumwpm,
        cnt: cnt,
      };
    case "setaccuracy": //send the match object
      console.log(state);
      console.log(payload);
      let temp = { ...state };
      console.log(temp);
      let crct = payload.crct;
      let wrong = payload.wrong;
      let crntaccuracy = crct + wrong == 0 ? 0 : (crct / (crct + wrong)) * 100;
      console.log(crntaccuracy);
      console.log("this is ", temp.sumaccuracy);
      temp.sumaccuracy += crntaccuracy;
      console.log(temp);
      return temp;
    case "setwpm": //send the match object
      let temp2 = { ...state };
      temp2.sumwpm += payload.crct;
      return temp2;
    default:
      return state;
  }
};
