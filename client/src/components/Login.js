import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Title from "./Title";
import { ThemeProvider } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import { toast } from "react-toastify";

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    "&:hover": {
      backgroundColor: "red !important",
    },
  },
}));

const Login = ({ setAuth }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await res.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("🚀 Login Successful!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "success",
        });
      } else {
        setAuth(false);
        toast.error("😞 " + parseRes, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "error",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Title
            size={200}
            text1="HEX"
            text2="FINDER"
            open={true}
            stroke={"red"}
          />
          <br />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form noValidate onSubmit={onSubmitForm}>
            <ThemeProvider theme={theme}>
              <TextField
                className={classes.form}
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                type="text"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </ThemeProvider>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
                {/* <ThemeProvider theme={theme}>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </ThemeProvider> */}
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default Login;
