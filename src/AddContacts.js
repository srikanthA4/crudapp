import { NavBar } from "./NavBar";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddContacts() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="butn"
        variant="contained"
        onClick={() => navigate("/add-contact")}
      >
        <div className="addbtn">
          <ControlPointIcon />
          Add contact
        </div>
      </Button>
    </div>
  );
}

export function AddContactPage({ setCon }) {
  const navigate = useNavigate();

  

  const formValidationSchema = yup.object({
    name: yup
      .string()
      .max(20, "Woah, the name is too long 🤔")
      .required(
        "We can't identify the person without a name. So, please enter a name 😊"
      ),
    phone: yup
      .string()
      .min(10, "This doesnt seem to be a valid phone number 🤔")
      .required(
        "It is only logical to have a phone number in a contact list don't you think? 😅"
      ),
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "This doesnt seem to be a valid email ID 🤔"
      )
      .required(
        "We will need a mail ID one day or the other, so why not add it now? 🤷‍♀️"
      ),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        email: "",
        street: "",
        city: "",
        country: "",
        zip: "",
        url: "",
      },
      // validate={validateForm}
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        setCon(values);
        navigate("/");
      },
    });

  return (
    <div>
      <NavBar />
      <form className="form-div" onSubmit={handleSubmit}>
        <TextField
          className="standard-basic"
          label="Full Name"
          variant="filled"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && errors.name}
        <TextField
          className="standard-basic"
          label="Phone No."
          variant="filled"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone && errors.phone}
        <TextField
          className="standard-basic"
          label="Mail ID"
          variant="filled"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && errors.email}
        <TextField
          className="standard-basic"
          label="Street"
          variant="filled"
          id="street"
          name="street"
          value={values.street}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          className="standard-basic"
          label="City"
          variant="filled"
          id="city"
          name="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          className="standard-basic"
          label="Country"
          variant="filled"
          id="country"
          name="country"
          value={values.cpuntry}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          className="standard-basic"
          label="Zip Code"
          variant="filled"
          id="zip"
          name="zip"
          value={values.zip}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          className="standard-basic"
          label="Photo URL"
          variant="filled"
          input
          id="url"
          name="url"
          value={values.url}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button
          className="buttn"
          variant="contained"
          type="submit"
          // onClick={() => {
          //
          // }}
        >
          <div className="addbtn">Save Contact</div>
        </Button>
      </form>
    </div>
  );
}