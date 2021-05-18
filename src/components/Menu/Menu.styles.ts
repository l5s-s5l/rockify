import { color } from "cssVariables";

export const styles = {
  menu: {
    width: '100%',
    display: 'flex',
    backgroundColor: color.blue,
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    height: 50,
    padding: '0 50px',
    marginBottom: 30,
  },

  menuItem: {
    height: '100%',
    width: 160,
    '& a': {
      height: '100%',
      fontWeight: '500',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

  }

};
