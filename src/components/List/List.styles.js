import { color } from "cssVariables";

export const styles = {
  list: {
    border: `solid 1px ${color.darkGray}`,
    padding: 50,
  },

  listItem: {
    "& ::hover": {
      backgroundColor: color.lightGrey,
    },
  },
};
