import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Copyright from '@/components/Copyright';
import ParaBanner from '@/components/parallax';

export default function AboutPage() {
  return (
    <Box sx={{ mt: -4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: '50vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6,
        }}
      >
        <ParaBanner
          url="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/306926603_785895316060737_1760020127035378579_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=POzR6QC4FCkQ7kNvgFq77S3&_nc_oc=Adg6zj9Y5zFb6s7YnjoinKT5whC9oegUlhX4_Jn37PfF-1Y0jQMHP_3kIlQN9AKrqUw&_nc_zt=23&_nc_ht=scontent.fosu2-1.fna&_nc_gid=AOu8H1tqXkn3bGaAZ5zozox&oh=00_AYHNLtnbbJxUP3kLNH9_IViL-sQnpSksnX2b4ghl2WXaeQ&oe=67D78365"
          headline="About Us"
          subtext="Learn more!"
        />
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={6}>
          {/* Company Overview */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              “Stories and Contemplation”
            </Typography>
            <Typography variant="body1" paragraph>
            Friends with Elephants is the musical endeavor of Columbus-based singer-songwriter Ethan Benton, whose eclectic influences span from indie and alternative icons like Fleet Foxes, Radiohead, and Sufjan Stevens to classic artists such as Billy Joel and The Zombies. This diverse range of inspirations culminates in a sound that is both unique and deeply resonant.<br /><br />The ensemble has actively contributed to Columbus&apos; vibrant music scene, performing at notable events and esteemed venues. Their dynamic presence has been showcased at Brewdog’s AGM Fest, What? Music and Arts Fest, and the CD 92.9 Livestream Series. They&apos;ve also taken the stage at renowned local spots including Skully’s Music Diner, The Summit Music Hall, Ace of Cups, and Rumba Cafe.
            </Typography>
          </Grid>

          {/* Our Story */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Releases
            </Typography>
            <Typography variant="body1" paragraph>
            In June 2021, their single &#34;We Might Be Dreaming&#34; garnered praise from Bravado Press, which lauded it as &#34;a thing of indie genius.&#34; Building on this momentum, the band released their EP &apos;Time&apos;, which was described as &#34;a calming, relaxing, mind-clearing stroll through the park.&#34;
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}