import React from "react";
export function React_lazy(fn) {
  return React.lazy(
    //
    () =>
      demo_delayImport(
        fn //
      )
  );
}

function shouldDelayDynamicImport() {
  const urlParams = new URLSearchParams(window.location.search);
  const delay = urlParams.get("delayimport");
  return delay !== null;
}

function shouldDelayForFetch() {
  const urlParams = new URLSearchParams(window.location.search);
  const delay = urlParams.get("delayfetch");
  return delay !== null;
}

function shouldDelayForImg() {
  const urlParams = new URLSearchParams(window.location.search);
  const delay = urlParams.get("delayimg");

  return delay !== null;
}

// export const demo_delayRandomImgLoad = cb =>
// 	shouldDelayForImg() ? new Promise(resolve => setTimeout(() => resolve(cb()), (Math.floor(Math.random() * 4) + 2) * 500)) : cb();

export const demo_delayImport = (cb, timeoutInMs = 1500) =>
  shouldDelayDynamicImport() ? new Promise(resolve => setTimeout(() => resolve(cb()), timeoutInMs)) : cb();

export const demo_delayFetch = (cb, timeoutInMs = 125) =>
  shouldDelayForFetch()
    ? new Promise(resolve => setTimeout(() => resolve(cb()), (Math.floor(Math.random() * 4) + 2) * timeoutInMs))
    : cb();
