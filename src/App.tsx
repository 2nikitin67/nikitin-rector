import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { ROUTES } from './routes/routes';
import Technology from './pages/Technology';
import Design from './pages/Design';
import Culture from './pages/Culture';
import Business from './pages/Business';
import Politics from './pages/Politics';
import Opinion from './pages/Opinion';
import Science from './pages/Science';
import Health from './pages/Health';
import Style from './pages/Style';
import Travel from './pages/Travel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.technology} element={<Technology />} />
          <Route path={ROUTES.design} element={<Design />} />
          <Route path={ROUTES.culture} element={<Culture />} />
          <Route path={ROUTES.business} element={<Business />} />
          <Route path={ROUTES.politics} element={<Politics />} />
          <Route path={ROUTES.opinion} element={<Opinion />} />
          <Route path={ROUTES.science} element={<Science />} />
          <Route path={ROUTES.health} element={<Health />} />
          <Route path={ROUTES.style} element={<Style />} />
          <Route path={ROUTES.travel} element={<Travel />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
