import * as React from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { Button, Divider } from '@mui/material'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }))
// app/page.tsx
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

export default function Home() {
  return (
    <main>
      <h1> Texas Defense Data </h1>
      <p> The only site for publicly available indigent defense data</p>
      <div>
        <Hero
          imageUrl="https://example.com/your-image.jpg"
          title="Welcome to Our Website"
          subtitle="Explore the best content here"
        />
      </div>
      <div>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Paper>Paper 1</Paper>
          <Paper>Paper 2</Paper>
          <Button>Paper 3</Button>
        </Stack>
      </div>
    </main>
  )
}
