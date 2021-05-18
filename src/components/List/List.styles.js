import { color, fontSize } from "cssVariables";

export const styles = {
  list: {
    padding: [50, 50, 50, 0],
    width: "50vw",
  },

  placeholder: {
    marginTop: 50,
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
  },
};
