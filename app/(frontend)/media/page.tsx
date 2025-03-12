'use client';

import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Container } from '@mui/material';
import AudioPlayer from '@/components/AudioPlayer';
import ParaBanner from '@/components/parallax';

const rows: GridRowsProp = [
  {
    id: 1, title: 'Life Lesson',
    date: '02-07-2025',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67d1b4fb8c7fdc11bef216c7/1741796613096/Life+Lesson.mp3/original/Life+Lesson.mp3',
    comments: ''
  },
  {
    id: 2, title: 'Asymmetrical (In a Good Way)',
    date: '10-10-2023',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67d1b52e619736797554e0e8/1741796663556/Asymmetrical+%28In+a+Good+Way%29.mp3/original/Asymmetrical+%28In+a+Good+Way%29.mp3',
    comments: ''
  },
  {
    id: 3, title: 'Slow Time',
    date: '06-24-2022',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67d1b5448f9bb71cddcb3030/1741796683127/Slow+Time.mp3/original/Slow+Time.mp3',
    comments: ''
  },
];

export default function SongsPage() {
  const [selectedSong, setSelectedSong] = React.useState(rows[0]);

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Song', width: 200, flex: 1 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'comments', headerName: 'Comments', width: 300, flex: 1.5 },
  ];

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
          url="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/448637109_8641601715855518_2835954155738774645_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uy8UqGAfxuMQ7kNvgGlwB_P&_nc_oc=AdghZ59LN9rMjfNLo0C98TJxN_za5KwJaXl3ZJnYJxNDO_PmNxHPcsjxQpAGjr3Eq6g&_nc_zt=23&_nc_ht=scontent.fosu2-1.fna&_nc_gid=A6PS9sCTqLeUhxN60Fgbd15&oh=00_AYFXKqB8Rl3esVvzkoVIw-eAyv5TAh73yYgNmr79eIFtsw&oe=67D77D5B"
          headline="Media"
          subtext="Content!"
        />
      </Box>
      
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 4,
          mb: 6
        }}>
          <AudioPlayer
            url={selectedSong.link}
            title={selectedSong.title}
            comments={selectedSong.comments}
          />

          <Paper elevation={2} sx={{ height: 400 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              sx={{
                border: 'none',
                '& .MuiDataGrid-row': {
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                  }
                }
              }}
              onRowClick={(params) => setSelectedSong(params.row)}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              pageSizeOptions={[5]}
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}