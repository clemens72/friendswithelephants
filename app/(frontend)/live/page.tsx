'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';
import ParaBanner from '@/components/parallax';

export default function ServicesPage() {
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
          url="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/472377937_1135509447979658_8943943285303018532_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=scfYM9hJedsQ7kNvgE65jXp&_nc_oc=AdhW6fSQyIn1HscFCF37NshcC6HXsN0w2pWXTr8IUoa-CBIcuABq4vN_ZpRbfTqOlKE&_nc_zt=23&_nc_ht=scontent.fosu2-1.fna&_nc_gid=AS_LfaSMwHmTvjSLl0OznFk&oh=00_AYGV4wt-zd3oC_6fiwG3LicLU9qaBgwqtzHIZBRQZSxPnw&oe=67D790CF"
          headline="Upcoming Shows"
          subtext="Coming Soon!"
        />
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ my: 8 }}>

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>

    </Box>
  );
}