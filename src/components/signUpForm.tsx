import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import { signUpAPI } from "../utils/api";

export const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Required"),
      password: Yup.string().min(4).max(10).required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      signUpAPI(values);
      formik.resetForm();
    },
  });
  return (
    <Form style={{ width: "50%" }} onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicFirsName">
        <Form.Label style={{ color: "#616161" }}>First Name</Form.Label>
        <Form.Control
          name="firstName"
          type="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          style={{ borderColor: "bdbdbd" }}
        />
        <Form.Text className="text-muted">
          {formik.touched.firstName && formik.errors.firstName ? (
            <p>{formik.errors.firstName}</p>
          ) : null}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label style={{ color: "#616161" }}>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          type="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          style={{ borderColor: "bdbdbd" }}
        />
        <Form.Text className="text-muted">
          {formik.touched.lastName && formik.errors.lastName ? (
            <p>{formik.errors.lastName}</p>
          ) : null}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: "#616161" }}>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{ borderColor: "bdbdbd" }}
        />
        <Form.Text className="text-muted">
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ color: "#616161" }}>Password</Form.Label>
        <Form.Control
          style={{ borderColor: "bdbdbd" }}
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <Form.Text className="text-muted">
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </Form.Text>
      </Form.Group>

      <Button
        style={{
          backgroundColor: "#464646",
          color: "#FFFFFF",
          border: "#464646",
        }}
        className="w-100 mt-5"
        type="submit"
      >
        Sign Up
      </Button>
    </Form>
  );
};
