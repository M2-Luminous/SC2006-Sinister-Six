import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { verifyAdmin } from '../Control/VerifyAdmin';
import { useState } from 'react';
import { Alert } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';



const LoginPanel = ({ isVerfied, setIsVerified }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required')
        }),
        onSubmit: () => {
            setIsWrongCreds(false);
            verifyAdmin(formik.values.email, formik.values.password).then((doc) => {
                console.log(doc);
                if (!doc) {
                    setIsWrongCreds(true);
                }
                formik.setSubmitting(false);
                setIsVerified(doc);
            })
        },

    });

    const [isWrongCreds, setIsWrongCreds] = useState(false);

    return (
        <Container>
            {/* <Button variant="text" color="primary" onClick={() => {
                formik.setSubmitting(true);
            }}>
                test
            </Button> */}
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}
            >
                <Container maxWidth="sm">
                    <Button
                        startIcon={<ArrowBackIcon fontSize="small" />}
                        component={Link}
                        to={"/home"}
                    >
                        Back
                    </Button>
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ my: 3 }}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Admin Panel
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                Use your admin credentials to login
                            </Typography>
                        </Box>
                        {/* <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                xs={12}
                                md={6}
                            >
                                <Button
                                    color="info"
                                    fullWidth
                                    // startIcon={<FacebookIcon />}
                                    onClick={() => formik.handleSubmit()}
                                    size="large"
                                    variant="contained"
                                >
                                    Login with Facebook
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                            >
                                <Button
                                    color="error"
                                    fullWidth
                                    onClick={() => formik.handleSubmit()}
                                    size="large"
                                    // startIcon={<GoogleIcon />}
                                    variant="contained"
                                >
                                    Login with Google
                                </Button>
                            </Grid>
                        </Grid> */}
                        {/* <Box
                            sx={{
                                pb: 1,
                                pt: 3
                            }}
                        >
                            <Typography
                                align="center"
                                color="textSecondary"
                                variant="body1"
                            >
                                or login with email address
                            </Typography>
                        </Box> */}
                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            fullWidth
                            helperText={formik.touched.password && formik.errors.password}
                            label="Password"
                            margin="normal"
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.password}
                            variant="outlined"
                        />
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="secondary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                {formik.isSubmitting ? <CircularProgress size={26} color="primary" /> : <Typography sx={{ display: "hidden" }}>Login</Typography>}
                            </Button>
                        </Box>
                        {/* <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            Don&apos;t have an account?
                            {' '}
                            <Link
                                to="/register"
                                variant="subtitle2"
                                underline="hover"
                                sx={{
                                    cursor: 'pointer'
                                }}
                            >
                                Sign Up
                            </Link>
                        </Typography> */}
                        {isWrongCreds && <Alert severity="error">Wrong credentials</Alert>}

                    </form>
                </Container>
            </Box>
        </Container >
    );
};

const AdminPanel = ({ setIsVerified }) => {
    return (
        <Container>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}
            >
                <Container maxWidth="sm">
                    <Button
                        startIcon={<ArrowBackIcon fontSize="small" />}
                        onClick={() => {
                            setIsVerified(false);
                        }}
                    >
                        Logout
                    </Button>
                </Container>
            </Box>
        </Container >
    )
};


const Admin = () => {
    const [isVerified, setIsVerified] = useState(false);

    return (
        <div>
            {isVerified ? <AdminPanel setIsVerified={setIsVerified} /> : <LoginPanel isVerified={isVerified} setIsVerified={setIsVerified} />}
        </div>
    )
};

export default Admin;