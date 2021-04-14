export const styles = {
  listItem: {
    padding: 10,
    display: "flex",
    position: "relative",
    left: 0,

    "&:hover": {
      left: 20,
      transition: "left .4s ease-in-out",

      "&::after": {
        right: 0,
        transition: "none",
      },
    },
  },
};
