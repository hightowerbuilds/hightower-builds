import { NavLink } from "react-router-dom"

export default function HomePage() {
  return (
    <div>HomePage

        <p><NavLink to='/webdev'>web dev</NavLink></p>
        <p><NavLink to='/painting'>painting</NavLink></p>
    </div>
  )
}
