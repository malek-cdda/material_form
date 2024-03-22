"use client";

import { useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const scrollPercentage = (
          window.pageYOffset /
          (document.body.offsetHeight - window.innerHeight)
        ).toString();
        document.body.style.setProperty("--scroll", scrollPercentage);
      },
      false
    );
  }, []);
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",

          padding: "10px",
          backgroundColor: "black",
          color: "white",
          boxShadow: "0px 0px 10px #000000",
          gap: "5px",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
        }}>
        <Link
          color="white"
          style={{ backgroundColor: theme.palette.primary.main }}
          href="/">
          500page
        </Link>
        <Link
          style={{
            color: "white",
          }}
          href="/progress">
          404 page
        </Link>
        <Link
          style={{
            color: "white",
          }}
          href="/authentication/sign-up">
          Signup
        </Link>
        <Link
          style={{
            color: "white",
          }}
          href="/authentication/sign-in">
          Sign in
        </Link>
        <Link
          style={{
            color: "white",
          }}
          href="/authentication/forgot-password">
          forgot password
        </Link>
        <Link
          style={{
            color: "white",
          }}
          href="/authentication/reset-password">
          reset password
        </Link>
        <Link
          style={{
            color: "white",
          }}
          href="/authentication/unlock-session">
          unlock session
        </Link>
      </div>
      <div>
        <div className="progress"></div>

        <div className="cube-wrap"></div>
      </div>
    </>
  );
};

export default Navbar;
