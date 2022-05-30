import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {


  return (
    <NavContainer>
      <Link to="/">
        Accueil
      </Link>
      <div>
      <Link to="/">
        Charity
      </Link>
      </div>
    </NavContainer>
  )
}

export default Header
