import React, { useState } from 'react';
import { notesModel } from './models/noteModel';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotes from "./components/CreateNotes";

function App() {

  const [notes, setNotes] = useState<notesModel[]>([{
    id: (new Date()).toString(),
    title: "Example Notes",
    text: "It is just as reference",
    color: "#dfdfdf",
    date: (new Date()).toString()
  }]);

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
