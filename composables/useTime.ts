export const useTime = () => {
  const formatTime = (time: number) => {
    return new Intl.DateTimeFormat().format(time);
  };
  return { formatTime };
};

export function formatTime(time: number, options?: object) {
  return new Intl.DateTimeFormat(undefined, options).format(time);
}

export function formatFirebaseSecondsTime(seconds: number, options?: object) {
  if (!seconds) return "";
  const sec = seconds * 1000;
  return formatTime(sec, options);
}
