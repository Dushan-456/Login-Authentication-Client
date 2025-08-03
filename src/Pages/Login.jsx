import {
   FormControl,
   InputLabel,
   OutlinedInput,
   InputAdornment,
   IconButton,
   FormHelperText,
   Button,
} from "@mui/material";
import {
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   TextField,
   Box,
   Alert,
   Stack,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import API from "../assets/api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [successDialogOpen, setSuccessDialogOpen] = useState(false);
   const [serverError, setServerError] = useState("");
   const navigate = useNavigate();

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
      handleSubmit,
      formState: { errors },
   } = useForm();

   const submitCall = (data) => {
      console.log(data);
      sendRequest(data);
   };

   const sendRequest = async (data) => {
      try {
          const res = await API.post("/user/login", data ,{withCredentials:true});
          console.log("User Logged In:", res.data);
         setSuccessDialogOpen(true);
         setServerError("");
      } catch (error) {
         console.error(
            "User Login Error:",
            error.response?.data || error.message
         );

         setServerError(
            typeof error.response?.data?.error === "object"
               ? error.response.data.error
               : {
                    general:
                       error.response?.data?.error || "Something went wrong",
                 }
         );
      }
   };

   return (
      <div className="flex bg-gray-500 items-center justify-center h-screen">
         <form onSubmit={handleSubmit(submitCall)}>
            <div className="w-sm flex flex-col p-5 gap-5 bg-white  rounded-2xl ">
               <h1 className="text-4xl font-bold text-center">Login</h1>
               {serverError && typeof serverError === "object" && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                     {Object.entries(serverError).map(([field, message]) => (
                        <Alert severity="error" key={field}>
                           {message}
                        </Alert>
                     ))}
                  </Stack>
               )}
               <TextField
                  className="w-full"
                  id="outlined-error-helper-text"
                  label="User Name or Email"
                  {...register("emailOrUsername", {
                     required: "User Name or Email is Required",
                  })}
                  error={!!errors.emailOrUsername}
                  helperText={errors.emailOrUsername?.message}
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
                        required: "Password is Required",
                     })}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label={
                                 showPassword
                                    ? "hide password"
                                    : "show password"
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

               <div>
                  <Button type="submit" className="w-full" variant="contained">
                     Login
                  </Button>
               </div>
               <p className="text-center">
                  Don't have an account?{" "}
                  <Link to="/register">
                     <span className="text-blue-600 font-bold">
                        {" "}
                        Create new
                     </span>{" "}
                  </Link>{" "}
               </p>
            </div>
         </form>
         <Dialog
            open={successDialogOpen}
            onClose={() => {
               setSuccessDialogOpen(false);
            }}>
            {/* Centered Icon */}
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
               }}>
               <CheckCircleIcon
                  sx={{
                     width: 50,
                     height: 50,
                     color: "#02ab32",
                  }}
               />
            </Box>

            <DialogTitle sx={{ textAlign: "center" }}>
               Logged in
            </DialogTitle>

            <DialogContent
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: 4,
               }}>
               <p>The user login successfull!</p>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
               <Button
                  onClick={() => {
                     setSuccessDialogOpen(false);
                    //  navigate("/profile");
                  }}
                  autoFocus
                  variant="contained">
                  OK
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
};

export default Login;
