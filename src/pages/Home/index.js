import { useState } from "react"

const Home = () => {
  const [showText, updateShowText] = useState(false)

  return (
    <div>
      <h1 className="text-3xl font-extrabold">
        {showText ? "Welcome Home!" : ""}
      </h1>

      <button onClick={() => updateShowText(!showText)}>Toggle Text</button>
    </div>
  )
}

export default Home
