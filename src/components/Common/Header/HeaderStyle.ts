import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(() => ({
  Container: {
    display: "flex",
    justifyContent:'space-between',
    alignItems: "center",
    flexWrap: "wrap",
    height: 70,
    width: "100%",
    backgroundColor: "black",
    color: "white",
    margin:'0 auto'
  },
  Menu: {
    display: "flex",
  
  },
  Auth: {
    display: "flex",
    flexDirection:'row-reverse'
    
  },

  href: {
    textDecoration: "none",
    paddingLeft: 20,
    color: "white",
  },
}));

export default useStyles;
