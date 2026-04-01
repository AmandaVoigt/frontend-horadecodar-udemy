import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Amanda", "Matheus", "Maria"])  

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender