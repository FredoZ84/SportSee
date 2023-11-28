import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header({ user }) {
  const navagation = [
    { title: 'Accueil', link: '/' },
    { title: 'Profil', link: `/user/${user}` },
    { title: 'Réglage', link: '/setting' },
    { title: 'Communauté', link: '/community' },
  ]

  // Condition des donnés mockées
  if (user === '15') {
    navagation[1].link += '?mocked=true'
  }
  return (
    <header className="flex">
      <h1>
        <Link to={navagation[0].link}>
          <img src={logo} alt="logo de SporSee" className="logo" />
          <span id="company_name" className="none">
            SportSee
          </span>
        </Link>
      </h1>
      <nav>
        <ul className="flex">
          {navagation.map(({ title, link }, index) => (
            <li key={`${index}`}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
