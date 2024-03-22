"use client";
// import { Controller, useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { Box, inputLabelClasses } from "@mui/material";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { motion } from "framer-motion";

import Image from "next/image";
import styled from "styled-components";
function SignUp() {
  const textFieldStyle = {
    inputField: {
      marginBottom: "32px",
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "blue",
        },
      },
    },
    labelArea: {
      sx: {
        [`&.${inputLabelClasses.shrink}`]: {
          color: "blue",
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
      <Box
        sx={{
          display: "flex",
          minWidth: 0,
          flex: "auto",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "& > :not(style) + :not(style)": {
            marginTop: "16px",
          },
          "@media (min-width: 600px)": {
            justifyContent: "center",
          },
        }}>
        <Paper
          sx={{
            minHeight: "full",
            width: "full",
            paddingX: "16px",
            paddingY: "32px",
            borderRadius: "24px",

            "@media (min-width: 600px)": {
              minHeight: "auto",
              width: "auto",
              padding: "48px",
              boxShadow: "sm",
            },
          }}>
          <Box
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "full",
              maxWidth: "320px",
              "@media (min-width: 600px)": {
                marginLeft: 0,
                marginRight: 0,
                width: "320px",
              },
            }}>
            <Image
              width={50}
              height={50}
              className="w-48"
              style={{
                width: "48px",
                height: "48px",
              }}
              src="/assets/logo/logo.svg"
              alt="logo"
            />

            <Typography
              sx={{
                marginTop: "32px",
                fontSize: "2.25rem", // 4xl
                fontWeight: "800", // font-extrabold
                lineHeight: "1.125", // leading-tight
                letterSpacing: "-0.025em", // tracking-tight
              }}>
              Sign up
            </Typography>
            <Box
              sx={{
                marginTop: "2px",
                display: "flex",
                alignItems: "baseline",
                fontWeight: "500", // font-medium
              }}>
              <Typography>Don&apos;t have an account?</Typography>
              <Link
                style={{
                  marginLeft: "4px",
                  color: "#4f46e5",
                }}
                href="/sign-up">
                Sign up
              </Link>
            </Box>

            <form
              name="loginForm"
              noValidate
              style={{
                marginTop: "32px",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
              }}>
              <TextField
                sx={{ ...textFieldStyle.inputField }}
                InputLabelProps={{
                  ...textFieldStyle.labelArea,
                }}
                label="Email"
                autoFocus
                type="email"
                variant="outlined"
                // variant="standard"

                required
                fullWidth
              />

              <TextField
                sx={{ ...textFieldStyle.inputField }}
                InputLabelProps={{
                  ...textFieldStyle.labelArea,
                }}
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                sx={{ ...textFieldStyle.inputField }}
                InputLabelProps={{
                  ...textFieldStyle.labelArea,
                }}
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                sx={{ ...textFieldStyle.inputField }}
                InputLabelProps={{
                  ...textFieldStyle.labelArea,
                }}
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
              />

              <Box
                className="flex flex-col items-center justify-center sm:flex-row sm:justify-between"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "@media (min-width: 600px)": {
                    flexDirection: "row",
                    justifyContent: "space-between",
                  },
                }}>
                <FormControl>
                  <FormControlLabel
                    label="I agree to the Terms of Service and Privacy Policy"
                    control={
                      <Checkbox
                        size="small"
                        sx={{
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    }
                  />
                </FormControl>
              </Box>
              <Button
                variant="contained"
                // color="red"
                sx={{
                  marginTop: "16px",
                  width: "100%",
                  borderRadius: "30px",
                  fontSize: "15px",
                  textTransform: "capitalize",
                  backgroundColor: "#4f46e5",
                  "&:hover": {
                    backgroundColor: "blue",
                  },
                }}
                aria-label="Sign in"
                //   disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit">
                Create account
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
    </motion.div>
  );
}

export default SignUp;
