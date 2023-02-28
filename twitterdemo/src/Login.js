import React from 'react'
import { Box, Button, Stack, TextField } from '@mui/material';

function Login() {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent="center"
            boxShadow={"3px 3px 3px 3px #ccc"}
            margin="auto"
            marginTop={20}
            maxWidth={"300px"}
            padding={5}
        >
            <Stack direction={"column"} spacing={3}>
                <TextField
                    variant='filled'
                    label="Username"
                    type={"text"}
                    placeholder="Please enter the username"
                />
                <TextField
                    variant='filled'
                    label="Email"
                    type={"email"}
                    placeholder="Please enter the email"
                />
                <TextField
                    variant='filled'
                    label="Password"
                    type={"password"}
                    placeholder="Please enter the password"
                />
                <Button variant='contained'>Login</Button>
            </Stack>
        </Box>

    )
}

export default Login