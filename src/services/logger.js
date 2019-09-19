import * as Sentry from "@sentry/browser";

import config from "./../config";

function init() {
  Sentry.init({ dsn: config.logger });
}

function log(error) {
  console.error(error);
  Sentry.captureException(error);
}

export default {
  init,
  log
};
