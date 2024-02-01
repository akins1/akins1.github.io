"use client"

import { DawContext } from "@/daw/DawContext";
import { createContext, useContext } from "react";


export const GlobalDawContext = createContext<DawContext>(new DawContext());