//import * as Sentry from "@sentry/react";
//import { Integrations } from "@sentry/tracing";

function init() {
  // Sentry.init({
  //   dsn: "https://40691b0546ec4025b0034c382f256492@o910854.ingest.sentry.io/5845808",
  //   integrations: [new Integrations.BrowserTracing()],
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  //Raven.captureException(error);
  console.log(error);
}

const logger = {
  init,
  log,
};

export default logger;
