// import React, { useState } from "react";
// import classes from "./RegistrationForm.module.css";
// import { Link } from "react-router-dom";
// import Button from "../UI/Button";
// import Card from "../UI/Card";


// const RegistrationForm = () => {
//   const [values, setValue] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [valid, setValid] = useState(false);

//   const firstNameInouttHandler = (e) => {
//     setValue({ ...values, firstName: e.target.value });
//   };

//   const lastNameInouttHandler = (e) => {
//     setValue({ ...values, lastName: e.target.value });
//   };

//   const emailInouttHandler = (e) => {
//     setValue({ ...values, email: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (values.firstName && values.lastName && values.email) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };

//   return (
//     <Card>
//       <form className={classes.container} onSubmit={submitHandler}>
//         <div className={classes.title}>USER REGISTRATION FORM</div>
//         {submitted && valid ? (
//           <div className={classes.message}>
//             Success.Thank you for registration
//           </div>
//         ) : null}
//         <input
//           onChange={firstNameInouttHandler}
//           value={values.firstName}
//           type="text"
//           placeholder="Enter Player Name"
//         />
//         {submitted && !values.firstName ? (
//           <span> Please enter valid PLAYER NAME</span>
//         ) : null}

//         <input
//           onChange={lastNameInouttHandler}
//           value={values.lastName}
//           type="text"
//           placeholder="Enter Password"
//         />
//         {submitted && !values.lastName ? (
//           <span> Please enter valid password</span>
//         ) : null}

//         <input
//           onChange={lastNameInouttHandler}
//           value={values.lastName}
//           type="text"
//           placeholder="Re-enter password"
//         />
//         {submitted && !values.lastName ? (
//           <span> Please re-enter password</span>
//         ) : null}

//         <input
//           onChange={emailInouttHandler}
//           value={values.email}
//           type="text"
//           placeholder="Enter Email Address"
//         />
//         {submitted && !values.email ? (
//           <span> Please enter valid email address</span>
//         ) : null}
//         <Link to="/">
//           <Button className={classes.logInBtm}>HOMEPAGE</Button>
//         </Link>
//         <Button>REGISTER</Button>
//       </form>
//     </Card>
//   );
// };
// export default RegistrationForm;
