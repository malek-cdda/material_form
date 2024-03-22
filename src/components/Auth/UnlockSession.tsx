// import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { Box } from "@mui/material";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import Image from "next/image";
function UnlockSession() {
  return (
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
            borderRadius: "2xl",
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
              fontSize: "32px", // 4xl
              fontWeight: "800", // font-extrabold
              lineHeight: "1.125", // leading-tight
              letterSpacing: "-0.025em", // tracking-tight
            }}>
            Unlock your session
          </Typography>
          <Box
            sx={{
              marginTop: "2px",
              display: "flex",
              alignItems: "baseline",
              fontWeight: "500", // font-medium
            }}>
            <Typography> Your session is locked due to inactivity</Typography>
          </Box>

          <form
            name="loginForm"
            noValidate
            style={{
              marginTop: "24px",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
            }}
            // onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              //   {...field}
              sx={{ marginBottom: "24px" }}
              label="Email"
              autoFocus
              type="email"
              //   error={!!errors.email}
              //   helperText={errors?.email?.message}
              variant="outlined"
              required
              fullWidth
            />

            <Button
              variant="contained"
              color="secondary"
              sx={{
                marginTop: "16px",
                width: "100%",
              }}
              aria-label="Sign in"
              //   disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large">
              Send reset link
            </Button>

            <Box
              sx={{
                marginTop: "32px",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginTop: "1px", // 1px is equivalent to px

                  // Assuming you want a solid border
                }}>
                Return to
              </Box>
              <Link
                style={{
                  margin: "8px",
                  color: "red", // Assuming 8px is the margin value
                }}
                href="/">
                Sign in
              </Link>
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}

export default UnlockSession;
