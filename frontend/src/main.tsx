import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'swiper/swiper-bundle.css';
import 'flatpickr/dist/flatpickr.css';
import App from './App.tsx';
import { AppWrapper } from './components/common/PageMeta.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ApolloProvider } from '@apollo/client';
import { client } from './context/apollo.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>,
);
