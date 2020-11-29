import { getTeam } from "../lib/api"

export default function Test({ data }) {
  return (
    <div>
    {data.allPeople.map(person =>
      <p>{person.name}</p>
    )}
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  return await getTeam(preview)
}