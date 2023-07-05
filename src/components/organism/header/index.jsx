import { Fragment, useState } from 'react'
import {
  Dialog,
  Disclosure,
  Popover,
  Transition
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon
} from '@heroicons/react/20/solid'
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row
} from 'react-bootstrap'
import { getRole, getToken, role } from '../../../utils'
import { useDispatch } from 'react-redux'
import { logoutRequest } from './_redux/action'

const Header = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const dispatch = useDispatch()

  const navItemBeforeLogin = [
    {
      id: 1,
      title: 'Product',
      url: '/'
    }
  ]

  const navItemAfterLogin = [
    {
      id: 1,
      title: 'Profile',
      url: '/profile'
    }
  ]

  const navItemAdmin = [
    {
      id: 1,
      title: 'Page Admin',
      url: '/admin'
    }
  ]

  const logout = async () => {
    await dispatch(logoutRequest())
  }

  return (
    <Navbar expand="sm" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
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
              {navItemBeforeLogin.map((item) => (
                <Nav.Link key={item.id} href={item.url}>
                  {item.title}
                </Nav.Link>
              ))}
              {getToken &&
                navItemAfterLogin.map((item) => (
                  <Nav.Link key={item.id} href={item.url}>
                    {item.title}
                  </Nav.Link>
                ))}
              {getToken &&
                navItemAfterLogin.map((item) => (
                  <Nav.Link key={item.id} href={item.url}>
                    {item.title}
                  </Nav.Link>
                ))}
              {getToken &&
                getRole === role.admin &&
                navItemAdmin.map((item) => (
                  <Nav.Link key={item.id} href={item.url}>
                    {item.title}
                  </Nav.Link>
                ))}
              {getToken && <Button onClick={logout}>Sign Out</Button>}
              {/* <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="#action3">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
