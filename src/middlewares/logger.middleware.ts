import fs from "node:fs";
import morgan from "morgan";

const customLog =
  'TIME=":date[iso]" - URL=":url" - Method=":method" - IP=":remote-addr" - Ref=":referrer" - Status=":status" - Sign=":user-agent" (:response-time[digits] ms)';
const now = new Date();
const today = now.toISOString().split("T")[0];

fs.mkdirSync("./logs", { recursive: true });

export default morgan(customLog, {
  stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" }),
});
