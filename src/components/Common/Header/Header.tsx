import { Link } from "react-router-dom";
import useStyles from "./HeaderStyle";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <h2>SABKA BAZAAR</h2>
      <div className={classes.Menu}>
        <Link className={classes.href} to="/">
          Home
        </Link>
        <Link className={classes.href} to="/order">
          Orders
        </Link>
      </div>
      <div className={classes.Auth}>
        <Link className={classes.href} to="/SignUp">
          Register
        </Link>
        <Link className={classes.href} to="/login">
          Login
        </Link>
        <Link className={classes.href} to="/cart">
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
