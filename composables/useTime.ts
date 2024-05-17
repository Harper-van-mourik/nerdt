export const useTime = () => {
  const formatTime = (time: number) => {
    return new Intl.DateTimeFormat().format(time);
  };
  return { formatTime };
};
