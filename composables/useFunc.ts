export const useFunc = () => {
  const sayHello = (user: String) => {
    console.log("hello" + user);
  };
  return {
    sayHello,
  };
};
