import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
  fullname:Yup.string().min(2,"Too Short!").max(50,"Too Long!"),
  email:Yup.string().email("Invalid email address").required("Email is required"),
  Password:Yup.string().min(6,"password must be at least 6 characters").required("password is requied"),
  confirmPassword:Yup.string().oneOf([Yup.ref("Password")],"password must match").required("Confirm password is required"),


});






export default SignupSchema;


