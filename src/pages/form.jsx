import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/global/Header";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: '',
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
    address1: yup.string().required('required'),
    address2: yup.string().required('required'),
})

const form = () => {
  const isNotMobile = useMediaQuery('(min-width:600px');

  const handleFormSubmit = (values) => {
        console.log(values);
  }

  return (
    <Box m='20px'>
        <Header title='CREATE USER' subtitle='Create a New User Profile' />

        <Formik 
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                        display='grid' 
                        gap='30px' 
                        gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                        sx={{
                            '& > div': { gridColumn: isNotMobile ? undefined : 'span 4'}
                        }}
                    >
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2" }}
                        />
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
  )
}

export default form