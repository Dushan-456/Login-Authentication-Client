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

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const handleMouseUpPassword = (event) => {
      event.preventDefault();
   };

   return (
      <div className="flex bg-gray-500 items-center justify-center h-screen">
         <div className="w-sm flex flex-col p-5 gap-5 bg-white h-96 rounded-2xl ">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <TextField
               className="w-full"
               // error
               id="outlined-error-helper-text"
               label="User Name or Email"
               //  helperText="Incorrect entry."
            />

            <FormControl sx={{ width: "100%" }} variant="outlined">
               <InputLabel htmlFor="outlined-adornment-password">
                  Password
               </InputLabel>
               <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           aria-label={
                              showPassword ? "hide password" : "show password"
                           }
                           onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                           onMouseUp={handleMouseUpPassword}
                           edge="end">
                           {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                     </InputAdornment>
                  }
                  label="Password"
               />
               {/* <FormHelperText>Incorrect entry.</FormHelperText> */}
            </FormControl>

            <div>
               <Button className="w-full" variant="contained">
                  Login
               </Button>
            </div>
            <p className="text-center">
               Don't have an account?{" "}
               <Link to="/register">
                  <span className="text-blue-600 font-bold"> Create new</span>{" "}
               </Link>{" "}
            </p>
         </div>
      </div>
   );
};

export default Login;
