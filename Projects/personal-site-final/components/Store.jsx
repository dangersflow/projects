import { createStore, createHook } from "react-sweet-state";

const ShowIntro = createStore({
  // value of the store on initialisation
  initialState: {
    showIntro: true,
  },
  // actions that trigger store mutation
  actions: {
    init:
      () =>
      ({ setState, getState }) => {
        if (typeof window !== "undefined") {
          // Perform localStorage action
          console.log(
            "getting localStorage" + localStorage.getItem("showIntro")
          );
          if (
            localStorage.getItem("showIntro") === null ||
            localStorage.getItem("showIntro") === undefined
          ) {
            localStorage.setItem("showIntro", true);
          } else {
            const item = localStorage.getItem("showIntro");
            console.log("localStorage item: ", item);
            setState({ showIntro: item });
          }
        }
      },
    turnOffIntro:
      () =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          showIntro: false,
        });
      },
    turnOnIntro:
      () =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          showIntro: true,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "showIntro",
});

export const useShowIntro = createHook(ShowIntro);
