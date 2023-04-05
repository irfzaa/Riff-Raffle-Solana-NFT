import { createTheme } from '@material-ui/core/styles';
import { DeviceType } from '../providers/ViewportProvider';

const PRIMARY_COLOR = '#E49477';
const SECONDARY_COLOR = '#748BAD';

const theme = ({ device }: { device: DeviceType }) =>
  createTheme({
    typography: {
      allVariants: { color: '#E49477', fontFamily: 'Roboto Mono' },
      h1: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        fontSize: device === DeviceType.Phone ? '20px' : '60px',
        fontWeight:'bold',
      },
      h2: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: device === DeviceType.Phone ? '18px' : '60px',
      },
      h3: {
        color: '#E49477',
        fontWeight: 'bold',
        fontSize: device === DeviceType.Phone ? '24px' : '24px',
      },
      h4: {
        color: '#748BAD',
        fontWeight:'bold',
        fontSize: device === DeviceType.Phone ? '20px' : '24px',
      },
      body1: {
        fontSize: device === DeviceType.Phone ? '14px' : '14px',
      },
      overline: {
        color: '#946F54',
        fontWeight:'bold',
        fontSize: device === DeviceType.Phone ? '12px' : '13px',
      },
      caption: {
        fontWeight:'bold',
        fontSize: device === DeviceType.Phone ? '16x' : '16px',
      },
    },
    palette: {
      type: 'dark',
      background: {
        paper: '#2D4B7A',
        default:
          'linear-gradient(0deg, rgba(57,9,74,1) 0%, rgba(6,18,98,1) 100%, rgba(57,9,74,1) 100%);',
      },
      primary: {
        main: PRIMARY_COLOR,
        
      },
      secondary: {
        main: SECONDARY_COLOR,
      },
      grey: { 500: '#777' },
    },
  });

export default theme;
