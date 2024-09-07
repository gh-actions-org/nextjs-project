import Flagsmith from "flagsmith-nodejs"; // Add this line if you're using flagsmith via npm

const flagsmith = new Flagsmith({
  environmentKey: process.env.FLAGSMITH_SERVER_KEY,
});

export { flagsmith };
