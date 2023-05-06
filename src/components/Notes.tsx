import React from 'react'
import { notesModel } from '../models/noteModel'
import { Button, Card } from 'react-bootstrap';

interface notesProps {
  note: notesModel,
  handleDelete: (id: string) => void,
};

const Notes: React.FC<notesProps> = ({ note, handleDelete }) => {
  return (
    <div className='mb-3'>
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle
            className='text-muted'
          >
            Created at : {note.date}
          </Card.Subtitle>
          <Button
            className='mt-2'
            variant='danger'
            onClick={() => { handleDelete(note.id) }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;