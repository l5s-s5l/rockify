import { fontSize, color } from 'cssVariables'

export const styles = {
  input: {
    borderRadius: 4,
    color: 'rgba(0, 0, 0, 0.87)',
    height: 55,
    width: '50vw',
    marginRight: 10,
    fontSize: fontSize.smallMedium,
    padding: [0, 20],
  },
  button: {
    backgroundColor: color.blue,
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    color: color.white,
    padding: [6, 16],
    borderRadius: '4px',
    fontSize: fontSize.smallMedium,
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',

    '&:active': {
      boxShadow: '0px 3px 1px -1px rgb(0 0 0 / 20%), 0px 2px 2px 1px rgb(0 0 0 / 14%), 0px 1px 5px 1px rgb(0 0 0 / 12%)',
    }
  }
};
