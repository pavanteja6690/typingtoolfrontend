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
        sumaccuracy += e ? (e.accuracy ? e.accuracy : 0) : 0;
        sumwpm += e ? (e.wpm ? e.wpm : 0) : 0;
        cnt++;
      });
      return {
        typingmatches: payload.typingmatches,
        sumaccuracy: sumaccuracy,
        sumwpm: sumwpm,
        cnt: cnt,
      };

    case "setmatch":
      let crct1 = payload.crct;
      let wrong1 = payload.wrong;
      let accuracy =
        crct1 + wrong1 === 0 ? 0 : (crct1 / (crct1 + wrong1)) * 100;
      let wpm = crct1;
      let temp3 = { ...state };
      wpm *= 6;
      temp3.typingmatches.push({ wpm: wpm, accuracy: accuracy });
      console.log(temp3.typingmatches);
      temp3.sumaccuracy += accuracy;
      temp3.sumwpm += wpm;
      temp3.cnt += 1;
      return temp3;
    case "emptymatches":
      return {
        typingmatches: [],
        sumaccuracy: 0,
        sumwpm: 0,
        cnt: 0,
      };
    default:
      return state;
  }
};
