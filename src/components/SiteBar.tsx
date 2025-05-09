import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import githubLogo from '../assets/github-mark.svg'
import { Avatar } from '@mui/material';

function SiteBar() {
  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h5'
            noWrap
            component='h5'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.12rem',
              color: 'inherit',
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            Justin Thomas - Software Engineer
          </Typography> 
          <Box sx={{ flexGrow: 0 }}>
            <Link href="https://www.github.com/JVThomas" sx={{ p: 0 }} target="_blank">
              {<Avatar alt="Github Logo" src={githubLogo}></Avatar>}
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SiteBar;
