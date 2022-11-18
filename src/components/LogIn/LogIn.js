// import React, { useState } from "react";
// import classes from "./LogIn.module.css";
// import { Link } from "react-router-dom";
// import Button from "../UI/Button";
// import Card from "../UI/Card";

// const LogIn = () => {
//   const [values, setValue] = useState({
//   userName: '',
//   password: ''
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [valid, setValid] = useState(false);

//   const userNameInputHandler = (e) => {
//     setValue({ ...values, firstName: e.target.value });
//   };

//   const passwordInputHandler = (e) => {
//     setValue({ ...values, lastName: e.target.value });
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
//         <div className={classes.title}></div>
//         {submitted && valid ? (
//           <div className={classes.message}>
//             Success.Thank you for registration
//           </div>
//         ) : null}
//         <input
//           onChange={userNameInputHandler}
//           value={values.userName}
//           type="text"
//           placeholder="Enter UserName"
//         />
//         {submitted && !values.userName ? (
//           <span> Please enter valid USER NAME</span>
//         ) : null}

//         <input
//           onChange={passwordInputHandler}
//           value={values.password}
//           type="text"
//           placeholder="Enter Password"
//         />
//         {submitted && !values.password ? (
//           <span> Please enter valid password</span>
//         ) : null}
//         <Link to="/">
//           <Button className={classes.logInBtm}>HOMEPAGE</Button>
//         </Link>
//         <div className={classes.buttomContainer}>
//           <Button>LOGIN</Button>
//           <Link to= "/registration" >
//             <Button>REGISTER</Button>
//           </Link>
//         </div>
//       </form>
//     </Card>
//   );
// };
// export default LogIn;
