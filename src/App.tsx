"use client";

import {
  Authenticated,
  Unauthenticated,
  useConvexAuth,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../convex/_generated/api";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./HomePage";

export default function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  );
}
