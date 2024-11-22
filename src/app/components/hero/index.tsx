import * as React from 'react';
import { Stack, Typography, Container, Divider } from '@mui/material';

interface HeroProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, subtitle, children }) => {
  return (
    <Stack
      sx={{
        height: '500px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
      // Using Stack properties to control layout
      alignItems="center"
      justifyContent="center"
    >
      {/* Overlay */}
      
    

      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" fontWeight="bold">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h5" component="p" mt={2}>
            {subtitle}
          </Typography>
        )}
        {children && (
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            mt={3}
            justifyContent="center"
          >
            {children}
          </Stack>
        )}
      </Container>
    </Stack>
  );
};

export default Hero;
