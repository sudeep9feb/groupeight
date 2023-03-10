import { Box, Stack } from '@mui/material'
import React from 'react'
import MainContent from './MainContent'
import RightBar from './RightBar'
import Sidebar from './Sidebar'

function Home() {
    return (
        <Box>
            <Stack direction={"row"} spacing={2}>
                <Sidebar />
                <MainContent />
                <RightBar />
            </Stack>
        </Box>
    )
}

export default Home