import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { loginAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { io, Socket } from "socket.io-client";

const LoginForm = ({ socket }: { socket: Socket}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Required"),
      password: Yup.string().min(8).required("Required"),
    }),
    onSubmit: (values) => {
      loginAPI(values, navigate, dispatch, socket);
      formik.resetForm();
    },
  });

  return (
    <Form style={{ width: "50%" }} onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: "#616161" }}>Email</Form.Label>
        <Form.Control
          style={{ borderColor: "#bdbdbd" }}
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
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
          style={{ borderColor: "#bdbdbd" }}
          type="password"
          name="password"
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
          color: "white",
          border: "#464646",
        }}
        className="w-100 mt-5"
        type="submit"
      >
        Sign In
      </Button>
      <Form.Text>
        Don't have an account?<Link to="/SignUp">sign Up </Link>{" "}
      </Form.Text>
    </Form>
  );
};

export default LoginForm;
