const debounce = (func, delay=1000) => {
  let timeoutId;
  return (...args) => {
    // stop timer if user still typing
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};