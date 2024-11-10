// components/Hero.tsx
import React from 'react'
import { Box, Typography, Container } from '@mui/material'

interface HeroProps {
  imageUrl: string
  title: string
  subtitle?: string
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <Box
      sx={{
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* Overlay */}
      <Box
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
      </Container>
    </Box>
  )
}

export default Hero
