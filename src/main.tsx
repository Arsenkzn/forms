import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { Demo } from './App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <MantineProvider>
          <Demo />
      </MantineProvider>
    </StrictMode>
);
