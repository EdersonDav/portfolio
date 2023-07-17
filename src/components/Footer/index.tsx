import moment from "moment"
import { Container } from "./styled"

export const Footer = () => {
  return (
    <Container>
      © EdersonDav {moment().format('YYYY')}
    </Container>
  )
}