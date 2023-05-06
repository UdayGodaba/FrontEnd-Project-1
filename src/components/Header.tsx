import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

const Header: React.FunctionComponent = () => {
  
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          Notes Frontend only
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;