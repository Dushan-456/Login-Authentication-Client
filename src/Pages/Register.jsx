import {
   FormControl,
   InputLabel,
   OutlinedInput,
   InputAdornment,
   IconButton,
   FormHelperText,
   Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const handleMouseUpPassword = (event) => {
      event.preventDefault();
   };
   // --------------------------------------------------------------

   const {
      register,
      watch,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const submitCall = (data) => {
      console.log(data);
   };
   const password = watch("password"); // Watch original password

   return (
      <div className="flex bg-gray-500 items-center justify-center h-screen">
         <form onSubmit={handleSubmit(submitCall)}>
            <div className="w-sm flex flex-col p-5 gap-5 bg-white  rounded-2xl ">
               <h1 className="text-4xl font-bold text-center">
                  Create an Account
               </h1>
               <TextField
                  className="w-full"
                  {...register("username", {
                     required: "User Name is Required",
                     minLength: {
                        value: 3,
                        message: "Name must be at least  characters",
                     },
                  })}
                  label="Username"
                  error={!!errors.username}
                  helperText={errors.username?.message}
               />
               <TextField
                  className="w-full"
                  {...register("email", {
                     required: "Email is required",
                     pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                     },
                  })}
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
               />
               <TextField
                  className="w-full"
                  label="Mobile"
                  {...register("mobile", {
                     required: "Mobile number is required",
                     pattern: {
                        value: /^(?:\+94|0)?[7][0-9]{8}$/,
                        message: "Invalid mobile number",
                     },
                  })}
                  error={!!errors.mobile}
                  helperText={errors.mobile?.message}
               />

               <TextField
                  className="w-full"
                  {...register("role", {
                     required: "Role number is required",
                  })}
                  label="Role"
                  error={!!errors.role}
                  helperText={errors.role?.message}
               />

               <FormControl
                  sx={{ width: "100%" }}
                  variant="outlined"
                  error={!!errors.password}>
                  <InputLabel htmlFor="outlined-adornment-password">
                     Password
                  </InputLabel>
                  <OutlinedInput
                     id="outlined-adornment-password"
                     type={showPassword ? "text" : "password"}
                     label="Password"
                     {...register("password", {
                        required: "Password is required",
                        validate: {
                           hasUpperCase: (value) =>
                              /[A-Z]/.test(value) ||
                              "Must include an uppercase letter",
                           hasLowerCase: (value) =>
                              /[a-z]/.test(value) ||
                              "Must include a lowercase letter",
                           hasNumber: (value) =>
                              /[0-9]/.test(value) || "Must include a number",
                           hasSymbol: (value) =>
                              /[\W_]/.test(value) || "Must include a symbol",
                           hasMinLength: (value) =>
                              value.length >= 8 ||
                              "Must be at least 8 characters",
                        },
                     })}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label={
                                 showPassword
                                    ? "Hide password"
                                    : "Show password"
                              }
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end">
                              {showPassword ? (
                                 <VisibilityOff />
                              ) : (
                                 <Visibility />
                              )}
                           </IconButton>
                        </InputAdornment>
                     }
                  />
                  <FormHelperText>{errors.password?.message}</FormHelperText>
               </FormControl>

               <FormControl
                  sx={{ width: "100%" }}
                  variant="outlined"
                  error={!!errors.con_password}>
                  <InputLabel htmlFor="outlined-adornment-password1">
                     Confirm Password
                  </InputLabel>
                  <OutlinedInput
                     id="outlined-adornment-password1"
                     type={showPassword ? "text" : "password"}
                     label="Confirm Password"
                     {...register("con_password", {
                        required: "Please confirm your password",
                        validate: (value) =>
                           value === password || "Passwords do not match",
                     })}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label={
                                 showPassword
                                    ? "Hide password"
                                    : "Show password"
                              }
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end">
                              {showPassword ? (
                                 <VisibilityOff />
                              ) : (
                                 <Visibility />
                              )}
                           </IconButton>
                        </InputAdornment>
                     }
                  />
                  <FormHelperText>
                     {errors.con_password?.message}
                  </FormHelperText>
               </FormControl>

               <div>
                  <Button type="submit" className="w-full" variant="contained">
                     Create Account
                  </Button>
               </div>
               <p className="text-center">
                  Already have an account?{" "}
                  <Link to="/">
                     <span className="text-blue-600 font-bold"> Login</span>{" "}
                  </Link>{" "}
               </p>
            </div>
         </form>
      </div>
   );
};

export default Register;
