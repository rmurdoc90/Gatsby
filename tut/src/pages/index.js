import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <h1>Home page</h1>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  font-size: 1rem;
  color: green;

  h1 {
    color: yellowgreen;
  }
`