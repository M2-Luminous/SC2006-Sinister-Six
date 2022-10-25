import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography, Alert, Card } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';


// Feedbacks imports
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import FeedbackClass from '../Entity/FeedbackClass';
import { verifyAdmin } from '../Control/VerifyAdminController';
import { getFeedbacks, delFeedback } from '../Control/DatabaseController';


const FeedbacksToolbar = () => {
    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                m: -1
            }}
        >
            <Typography
                sx={{ m: 1 }}
                variant="h4"
            >
                Manage Feedbacks
            </Typography>
        </Box>
    );
}

const Feedbacks = () => {

    const [listOfFeedbacks, setListOfFeedbacks] = useState([]);


    useEffect(() => {
        (async () => {
            try {
                const feedbacks = await getFeedbacks();
                setListOfFeedbacks(
                    feedbacks.docs.map(
                        (doc) =>
                            new FeedbackClass(
                                doc.id,
                                doc.data().name,
                                doc.data().email,
                                doc.data().feedback,
                                doc.data().createdAt
                            )
                    )
                );
                console.log("loaded");
            } catch (err) {
                console.log("ERROR" + err);
            }
        })();
    }, []);


    const deleteHandler = async (id) => {
        console.log("id:::: " + id);
        try {
            setListOfFeedbacks(listOfFeedbacks.filter((feedback) => feedback.getId() !== id));

            await delFeedback(id).then(() => {
                console.log("deleted");
            });

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <Card>
            <Box sx={{ minWidth: '100 %' }}>
                <Table>
                    <TableHead sx={{
                        backgroundColor: '#F3F4F6',
                        textTransform: 'uppercase',
                        borderBottom: 'none',
                        fontSize: '12px',
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                    }}>
                        <TableRow>
                            <TableCell padding="checkbox">
                                {/* <Checkbox
                                        checked={selectedCustomerIds.length === customers.length}
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0
                                            && selectedCustomerIds.length < customers.length
                                        }
                                        onChange={handleSelectAll}
                                    /> */}
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                Feedback
                            </TableCell>
                            <TableCell>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{}}>
                        {listOfFeedbacks.map((fb) => (
                            <TableRow
                                hover
                                key={fb.getId()}
                                // selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                                style={{
                                    whiteSpace: "normal",
                                    wordBreak: "break-word"
                                }}
                            >
                                <TableCell padding="checkbox">
                                    {/* <Checkbox
                                        checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                                        onChange={(event) => handleSelectOne(event, customer.id)}
                                        value="true"
                                    /> */}
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                    >
                                        <Typography
                                            color="textPrimary"
                                            variant="body1"
                                        >
                                            {fb.name}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    {fb.email}
                                </TableCell>
                                <TableCell sx={{ maxWidth: "400px" }}>
                                    {fb.feedback}

                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" onClick={() => {
                                        deleteHandler(fb.getId());
                                    }}>
                                        Delete
                                    </Button>
                                </TableCell>
                                {/* <TableCell>
                                    {format(customer.createdAt, 'dd/MM/yyyy')}
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            {/* <TablePagination
                component="div"
                // count={customers.length}
                count={5}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                // page={page}
                // rowsPerPage={limit}
                rowsPerPage={10}
                rowsPerPageOptions={[5, 10, 25]}
            /> */}
        </Card>
    );
}

const LoginPanel = ({ isVerfied, setIsVerified }) => {

    const [isWrongCreds, setIsWrongCreds] = useState(false);
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

    let history = useHistory();


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
                        onClick={() => {
                            history.goBack()
                        }}
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
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 3
                }}
            >
                {/* <Container maxWidth={false}> */}
                <Container>
                    <Button
                        startIcon={<ArrowBackIcon fontSize="small" />}
                        onClick={() => {
                            setIsVerified(false);
                        }}
                    >
                        Logout
                    </Button>

                    <FeedbacksToolbar />

                    <Box sx={{ mt: 3 }}>
                        {/* <CustomerListResults customers={customers} /> */}
                        <Feedbacks />
                    </Box>
                </Container>
            </Box>
        </>
    )
};



// renderer
const Admin = () => {
    const [isVerified, setIsVerified] = useState(false);

    return (
        <div>
            {isVerified ? <AdminPanel setIsVerified={setIsVerified} /> : <LoginPanel isVerified={isVerified} setIsVerified={setIsVerified} />}

            {/* <AdminPanel /> */}
        </div>
    )
};

export default Admin;