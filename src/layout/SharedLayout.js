import { Outlet } from "react-router-dom"
import React from "react"
import Navbar from "../components/Navbar"
export const SharedLayout = ()=>{
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}