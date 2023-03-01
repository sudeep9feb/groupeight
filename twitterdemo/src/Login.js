import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup"

function Login() {
    // yup validation rules
    const formSchema = Yup.object({
        username: Yup.string().required("username is required")
            .min(5, "no less than 5 characters").max(15, "no more than 15 characters"),
        email: Yup.string().required("Email is required").email("Email is not valid"),
        password: Yup.string().required("Password is required")
    })

    const formik = useFormik({
        // initial values
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        // validation rules
        validationSchema: formSchema,
        // submission
        onSubmit: (values) => {
            console.log(values);
        }
    }

    )
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
            <form onSubmit={formik.handleSubmit}>
                <Stack direction={"column"} spacing={3}>
                    <TextField
                        variant='filled'
                        label="Username"
                        type={"text"}
                        placeholder="Please enter the username"
                        name='username'
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.username && formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                    />
                    <TextField
                        variant='filled'
                        label="Email"
                        type={"email"}
                        placeholder="Please enter the email"
                        name='email'
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        variant='filled'
                        label="Password"
                        type={"password"}
                        placeholder="Please enter the password"
                        name='password'
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button type='submit' variant='contained'>
                        <Typography variant='h5'>Login</Typography>
                    </Button>
                </Stack>
            </form>
        </Box>

    )
}

export default Login