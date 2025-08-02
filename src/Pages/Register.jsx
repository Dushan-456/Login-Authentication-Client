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

const Register = () => {
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
         <div className="w-sm flex flex-col p-5 gap-5 bg-white  rounded-2xl ">
          <h1 className="text-4xl font-bold text-center">Create an Account</h1>
            <TextField
               className="w-full"
               // error
               label="Username"
               //  helperText="Incorrect entry."
            />
            <TextField
               className="w-full"
               // error
               label="Email"
               //  helperText="Incorrect entry."
            />
            <TextField
               className="w-full"
               // error
               label="Mobile"
               //  helperText="Incorrect entry."
            />
            <TextField
               className="w-full"
               // error
               label="Role"
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
            <FormControl sx={{ width: "100%" }} variant="outlined">
               <InputLabel htmlFor="outlined-adornment-password1">
                 Conform Password
               </InputLabel>
               <OutlinedInput
                  id="outlined-adornment-password1"
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
                  Create Account
               </Button>
            </div>
            <p className="text-center">Already have an account? <Link to='/'><span className="text-blue-600 font-bold">  Login</span> </Link>  </p>
         </div>
      </div>
   );
};

export default Register;
