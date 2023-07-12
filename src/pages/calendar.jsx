import { useState } from "react";
import FullCalendar  from '@fullcalendar/react';
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../components/global/Header";
import { colorTemplate } from "../theme";

import React from 'react'

const Calendar = () => {
    const theme = useTheme();
    const colors = colorTemplate(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt('Please enter title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    const handleEventClick = (selected) => {
        if(
            window.confirm(`Are you sure you want to delete the event ${selected.event.title}`)
            ){
            selected.event.remove();
        }
    }

  return (
    <Box m='20px'>
        <Header title='CALENDAR' subtitle='Full Calendar page for your reminders and events'/>

        <Box display='flex' justifyContent='space-between'>
            {/* calendar sidebar */}
            <Box 
                flex='1 1 20%' 
                backgroundColor={colors.primary[400]}
                p='15px'
                borderRadius='4px'
            >
                <Typography variant="h5">Events</Typography>
                <List>
                    {currentEvents.map((event) => (
                        <ListItem
                            key={event.id}
                            sx={{
                                backgroundColor: colors.greenAccent[500],
                                margin: '10px 0',
                                borderRadius: '2px',
                            }}
                        >
                            <ListItemText 
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Calendar */}
        </Box>
    </Box>
  )
}

export default Calendar;



