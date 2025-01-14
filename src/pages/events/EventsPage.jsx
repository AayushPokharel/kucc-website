import { collection, onSnapshot } from '@firebase/firestore'
import React, { useEffect } from 'react'
import db from '../../config/firebase'
import EventList from '../../components/Event/EventList'
import EventFilter from '../../components/EventFilter/EventFilter'
import { Container, Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

const EventsPage = () => {
  useEffect(() => {
    onSnapshot(collection(db, 'events'), (snapshot) => {
      const eventList = snapshot.docs.map((doc) => doc.data())
      console.log('All Events ', eventList)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title> Events - KUCC</title>
      </Helmet>
      <Container sx={{ pb: 8, pt: 4 }}>
        <Box>
          <Typography variant="h4" mb={2}>
            Events
          </Typography>
          <EventFilter />
        </Box>
        <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
          <EventList />
        </Box>
      </Container>
    </>
  )
}

export default EventsPage
