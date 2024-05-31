import { Members } from "@/sections"
import Head from "next/head"
import React from "react"

const members = () => {
  return (
    <>
      <Head>
        <title>Team - ACME</title>
      </Head>
      <Members />
    </>
  )
}

export default members
