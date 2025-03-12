import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import ParaBanner from '@/components/parallax';

export default function PublicPage() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6,
        }}
      >
        <ParaBanner
          url="https://images.squarespace-cdn.com/content/5aceb3075ffd20be26cc1d42/74c227a4-1ab5-4f90-85de-efbbd06a86bc/hero1.jpg"
          headline="Columbus, OH indie rock"
          subtext="with a dash of alt/country & a sprinkle of love 🐘✨"
          />
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
              WHERE INDIE MEETS IMAGINATION
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
            Friends with Elephants is the moniker of Columbus singer-songwriter Ethan Benton, whose influences range from Fleet Foxes, Radiohead, Sufjan Stevens and Pavement to Billy Joel, James Taylor, Jackson Browne and The Zombies.
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
            Friends with Elephants have played Brewdog’s AGM Fest, What? Music and Arts Fest, the CD 92.9 Livestream Series, Skully’s Music Diner, The Summit Music Hall, Ace of Cups, Rumba Cafe and many other cool shows at reputable venues. Their single ‘We Might Be Dreaming’ was referred to as “a thing of indie genius” by Bravado Press, in their glowing review from June 2021. Since the release of their EP ‘Time’ the band have added Mike Stokes (Playing to Vapors) on lead guitar and moved into a more collaborative creative process, with Benton bringing songs to the group and the band (Stokes, Cameron Reck and Ross Kiernicki) writing their own parts.
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/media"
            sx={{
              fontSize: '1.1rem',
              textTransform: 'none',
              borderRadius: '4px',
              mr: 2,
            }}
          >
            Music and More
          </Button>
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/contact"
            sx={{
              fontSize: '1.1rem',
              textTransform: 'none',
              borderRadius: '4px',
            }}
          >
            Contact Us
          </Button>
        </Box>

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}