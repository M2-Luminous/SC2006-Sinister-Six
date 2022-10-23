import {
    Alert,
    Box,
    Button,
    Container,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { writeFeedback } from '../Control/DatabaseController';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';



/**
 * This method is called when user lands on the feedback page.
 * @returns {JSX.Element} The feedback page
 */
const Feedback = () => {

    const [openSnack, setOpenSnack] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            // lastName: '',
            feedback: '',
            createdAt: new Date(),
            // policy: false
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(255, 'Name must be at most 255 characters')
                .required('Name is required'),
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255, 'Email must be at most 255 characters')
                .required('Email is required'),
            // lastName: Yup
            //     .string()
            //     .max(255)
            //     .required('Last name is required'),
            feedback: Yup
                .string()
                .max(999, 'Feedback must be at most 255 characters')
                .required('Feedback is required'),
            // policy: Yup
            //     .boolean()
            //     .oneOf(
            //         [true],
            //         'This field must be checked'
            //     )
        }),
        onSubmit: () => {
            // alert(JSON.stringify(formik.values, null, 2));
            writeFeedback(formik.values)
                .then(() => {
                    // get the promise to do something
                    // alert("Feedback submitted successfully");
                    formik.setSubmitting(false);
                    // to open the snackbar
                    setOpenSnack(true);
                    formik.resetForm();
                })
        },
    });

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
                                Feedback
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                Let us know how we can improve.
                            </Typography>
                        </Box>
                        <TextField
                            error={Boolean(formik.touched.name && formik.errors.name)}
                            fullWidth
                            helperText={formik.touched.name && formik.errors.name}
                            label="Name"
                            margin="normal"
                            name="name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            variant="outlined"
                        />
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
                            error={Boolean(formik.touched.feedback && formik.errors.feedback)}
                            fullWidth
                            helperText={formik.touched.feedback && formik.errors.feedback}
                            label="Feedback"
                            margin="normal"
                            name="feedback"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.feedback}
                            variant="outlined"
                            multiline
                            minRows={4}
                            maxRows={10}
                        />
                        {/* <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                ml: -1
                            }}
                        >
                            <Checkbox
                                checked={formik.values.policy}
                                name="policy"
                                onChange={formik.handleChange}
                            />
                            <Typography
                                color="textSecondary"
                                variant="body2"
                            >
                                I have read the
                                {' '}

                                <Link
                                    color="primary"
                                    underline="always"
                                    variant="subtitle2"
                                >
                                    Terms and Conditions
                                </Link>

                            </Typography>
                        </Box>
                        {Boolean(formik.touched.policy && formik.errors.policy) && (
                            <FormHelperText error>
                                {formik.errors.policy}
                            </FormHelperText>
                        )} */}
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="secondary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                sx={{ maxHeight: 50 }}
                            >
                                {formik.isSubmitting ? <CircularProgress size={26} color="primary" /> : <Typography sx={{ display: "hidden" }}>Submit</Typography>}
                            </Button>
                        </Box>
                        {/* <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            Have an account?
                            {' '}
                            <Link
                                variant="subtitle2"
                                underline="hover"
                            >
                                Sign In
                            </Link>
                        </Typography> */}
                    </form>
                </Container >
            </Box >


            <Snackbar
                open={openSnack}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Feedback received!
                </Alert>
            </Snackbar>

        </Container >

    );
}

export default Feedback;