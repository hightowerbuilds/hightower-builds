import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
 <div>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/painting' >Painting</NavLink>
    <NavLink to='/webdev' >Web Development</NavLink>
    <NavLink to='/contact' >Contact</NavLink>
 </div>
  )
}
