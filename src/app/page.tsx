import * as React from 'react';
import Hero from '@/app/components/hero';
import { Box, Typography, Button, Divider } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Hero
       imageUrl="/images/primary-personinjail.jpg"
        title="Texas Defense Data"
        subtitle="The only site for publicly available indigent defense data"
      >
        <Box sx={{ padding: 2}}>
          <Typography variant="subtitle1"> What is Texas Defense?</Typography>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Typography variant="subtitle1">Impacts of Public Defense Data</Typography>
        </Box>
        <Button variant="contained">Explore the Data</Button>
      </Hero>
    </main>
  );
}
