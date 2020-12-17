import ReactMarkdown from 'react-markdown'
import { H2, H3, H4, P, Button, Hr } from "./designSystem"

const Markdown = ({children}) => {
  const renderers = {
    paragraph: P,
    thematicBreak: Hr
  }
  
  return (
    <ReactMarkdown renderers={renderers}>{children}</ReactMarkdown>
  )
}

export default Markdown