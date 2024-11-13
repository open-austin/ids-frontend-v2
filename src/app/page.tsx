import * as React from 'react';
import Hero from '@/app/components/hero';
import { Box, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Hero
        imageUrl="https://example.com/your-image.jpg"
        title="Texas Defense Data"
        subtitle="The only site for publicly available indigent defense data"
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="subtitle1">Label 1</Typography>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Typography variant="subtitle1">Label 2</Typography>
        </Box>
        <Button variant="contained">Action</Button>
      </Hero>
    </main>
  );
}
