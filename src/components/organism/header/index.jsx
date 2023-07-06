import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas} from 'react-bootstrap'
import { getRole, getToken, role } from '../../../utils'
import { useDispatch } from 'react-redux'
import { logoutRequest } from './_redux/action'

const Header = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const dispatch = useDispatch()

  const navItemLogin = [
    {
      id: 1,
      title: 'Login',
      url: '/login'
    },
    {
      id: 2,
      title: 'Register',
      url: '/register'
    }
  ]

  const navItemBeforeLogin = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    }
  ]

  const navItemAfterLogin = [
    // {
    //   id: 1,
    //   title: 'Profile',
    //   url: '/profile'
    // }
  ]

  const navItemAdmin = [
    {
      id: 1,
      title: 'Master Data',
      url: '/master-data'
    }
  ]

  const logout = async () => {
    await dispatch(logoutRequest())
  }

  return (
    <Navbar expand="sm" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              E-Commerce
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {navItemBeforeLogin?.map((item) => (
                <Nav.Link key={item.id} href={item.url}>
                  {item.title}
                </Nav.Link>
              ))}
              {!getToken &&
                navItemLogin?.map((item) => (
                  <Nav.Link key={item.id} href={item.url}>
                    {item.title}
                  </Nav.Link>
                ))}
              {getToken &&
                navItemAfterLogin?.map((item) => (
                  <Nav.Link key={item.id} href={item.url}>
                    {item.title}
                  </Nav.Link>
                ))}
              {getToken &&
                getRole === role.admin &&
                navItemAdmin?.map((item) => (
                  <Nav.Link key={item.id} href={item.url}>
                    {item.title}
                  </Nav.Link>
                ))}
              {getToken && <Button size='sm' onClick={logout}>Sign Out</Button>}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
