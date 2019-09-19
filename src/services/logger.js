// import * as Sentry from "@sentry/browser";

// import config from "./../config";

function init() {
  console.log("Init Logger");
  //Sentry.init({ dsn: config.logger });
}

function log(error) {
  console.log("Logger: Error -> ");
  // console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log
};
