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
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
      }}
      // Using Stack properties to control layout
      alignItems="center"
      justifyContent="center"
    >
      {/* Overlay */}
      <Stack
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

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
