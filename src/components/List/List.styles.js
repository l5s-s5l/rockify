import { color, fontSize } from "cssVariables";

export const styles = {
  list: {
    padding: 50,
    width: "50vw",
  },

  listItem: {
    fontSize: fontSize.medium,
    fontWeight: 800,
    textAlign: "left",
    position: "relative",
    cursor: "pointer",
    borderBottom: `1px solid ${color.darkGray}`,

    "&:first-of-type": {
      borderTop: `1px solid ${color.darkGray}`,
    },

    "&:hover": {
      background: color.lightGrey,
    },

    "&::after": {
      content: '" "',
      //totally not necessary and even inefficient to load this via cloudfront but just as a showcase
      backgroundImage:
        "url(https://dkeivqzgh2yzv.cloudfront.net/fast-forward.svg)",
      width: 20,
      height: "100%",
      position: "absolute",
      right: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: 0,
    },
  },
};
