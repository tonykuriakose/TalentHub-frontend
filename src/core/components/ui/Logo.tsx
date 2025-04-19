import { Box} from '@mui/material';
import { Link } from 'react-router-dom';

type LogoProps = {
  homePath?: string;
  theme?: "light" | "dark";
}

const Logo = ({homePath = '/', theme="dark"}: LogoProps) => {
  return (
    <Link to={homePath} style={{ textDecoration: 'none' }}>
      <Box display="flex" alignItems="center">
        <img src="/logo.png" alt="hireverse-logo" width={440} height={440} style={{ marginRight: 8 }} />
      </Box>
    </Link>
  );
};

export default Logo;