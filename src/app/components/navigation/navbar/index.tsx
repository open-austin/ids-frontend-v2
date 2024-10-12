import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TDD
        </Typography>
        <Link href="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/data">
          <Button color="inherit">Data</Button>
        </Link>
      <Link href="/story">
          <Button color="inherit">Story</Button>
        </Link>
        <Link href="/tech">
          <Button color="inherit">Tech</Button>
        </Link>
        <Link href="/learn">
          <Button color="inherit">Learn</Button>
        </Link>
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;