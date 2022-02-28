export const setEarData = () => {
  let eardata = JSON.parse(localStorage.getItem("eardata"));
  if (!eardata) {
    console.log("no ear data");
    eardata = [0, 0, 0, 0, 0, 0, 0];
  }
  let todayDate = new Date();
  let today = todayDate.getDay();
  eardata[today] = Number(eardata[today]) + 40;
  localStorage.setItem("eardata", JSON.stringify(eardata));
};
