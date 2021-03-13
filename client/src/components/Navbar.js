import React from 'react';
// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
// React-router
import { Link } from 'react-router-dom';
// CSS Modules
import styles from '../styles/components/Navbar.module.css';

const popover = (
  <Popover className="mt-2">
    <Popover.Content className="px-0 py-2">
      <Link className={styles.link} to="/perfil">
        Dados Básicos
      </Link>
      <Link className={styles.link} to="/localizacao">
        Localização
      </Link>
      <div className={styles.divider}></div>
      <button className={styles.link}>
        <svg
          className="mr-2"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.844 17.542c-.343.425-.278 1.053.179 1.352a10 10 0 10.212-16.868c-.465.287-.545.913-.213 1.346.332.434.95.51 1.421.234a8.022 8.022 0 11-.172 13.738c-.464-.288-1.084-.227-1.427.198z"
            fill="#C93B59"
          ></path>
          <path
            d="M15.5 10.527h-12"
            stroke="#6D7679"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M6.5 6.527L3.207 9.82a1 1 0 000 1.414L6.5 14.527"
            stroke="#293E55"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
        Sair
      </button>
    </Popover.Content>
  </Popover>
);

export default function PageNavbar() {
  return (
    <div>
      <Navbar className="py-1 px-4" fixed="top" variant="light" expand="lg">
        <Navbar.Brand href="#home">
          <svg
            width="54"
            height="53"
            viewBox="0 0 54 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.873 32.667h-9.747c-5.307 0-9.626-4.358-9.626-9.714V17.71C12.504 12.358 16.819 8 22.127 8h9.747c5.307 0 9.626 4.358 9.626 9.71v5.238c0 5.36-4.319 9.719-9.627 9.719zM22.127 14.69c-1.654 0-2.996 1.355-2.996 3.024v5.239c0 1.669 1.342 3.024 2.997 3.024h9.747c1.654 0 2.996-1.355 2.996-3.024V17.71c0-1.67-1.342-3.024-2.996-3.024h-9.747v.004z"
              fill="#3B4B5B"
            ></path>
            <path
              d="M20.656 40.73c0-2.36-1.828-4.268-4.078-4.268-2.254 0-4.078 1.913-4.078 4.269 0 2.36 1.828 4.269 4.078 4.269 2.254 0 4.078-1.91 4.078-4.27z"
              fill="#C93B59"
            ></path>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={styles.navLink} href="#">
              Explorar
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="#">
              Inscrições
            </Nav.Link>
          </Nav>
          <Nav>
            <OverlayTrigger
              flip
              trigger="click"
              placement="bottom-end"
              overlay={popover}
            >
              <Image src="https://via.placeholder.com/40" roundedCircle />
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
