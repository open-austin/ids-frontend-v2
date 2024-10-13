import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TDD
        </Typography>
        <Stack direction={'row'} spacing={1}>
          <Link href="/">
            <Button variant="outlined" color="inherit">
              Home
            </Button>
          </Link>
          <Link href="/data">
            <Button variant="outlined" color="inherit">
              Data
            </Button>
          </Link>
          <Link href="/story">
            <Button variant="outlined" color="inherit">
              Story
            </Button>
          </Link>
          <Link href="/tech">
            <Button variant="outlined" color="inherit">
              Tech
            </Button>
          </Link>
          <Link href="/learn">
            <Button variant="outlined" color="inherit">
              Learn
            </Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
