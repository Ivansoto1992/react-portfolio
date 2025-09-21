import logo from '../assets/Logo.png'

export default function NavBar() {
  return (
    <header>
      <img src={logo} alt="Logo.png" width="50" height="50" />
      <h1>My Portfolio</h1>
    </header>
  )
}