import React from 'react'
import RightBar from '../RightBar'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function Home() {
    return (
        <Box>
            <Sidebar />
            <MainContent />
            <RightBar />
        </Box>
    )
}

export default Home