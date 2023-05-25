import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 800px;
`

// eslint-disable-next-line react/prop-types
export default function Layout ({ children }) {
  return (
    <Container>
      <Header />

      <main>{children}</main>

      <Footer />
    </Container>
  )
}