import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

// onFocusChange is a ReactDOM element event, where an element inside it gets focus
// opposite is onBlur, which blurs the element 
// isFocused: boolean returns void 

const addListener = (onFocusChange: (isFocused: boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
