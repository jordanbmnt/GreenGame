import { AppBar, Link } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar
      className='app-bar'
      sx={{ backgroundColor: "#121212", flexFlow: "row" }}
      position='fixed'
    >
      <Link
        color={"#FAFAFA"}
        underline='none'
        className='link'
        href='/instructions'
      >
        Instructions
      </Link>
      <Link color={"#FAFAFA"} underline='none' className='link' href='/'>
        Game
      </Link>
    </AppBar>
  );
}
