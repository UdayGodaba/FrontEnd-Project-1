import React, { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { notesModel } from '../models/noteModel';

interface createNotesProps {
  notes: notesModel[],
  setNotes: React.Dispatch<React.SetStateAction<notesModel[]>>
};

const CreateNotes: React.FC<createNotesProps> = ({notes, setNotes}) => {

  const [error, SetError] = useState<string>("");

  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return SetError("All fields are required");
    }
    SetError("");
    setNotes([...notes, {
      id: (new Date()).toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString()
    }]);

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  }

  return (
    <>
      <h2>Create Notes</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e) }>

        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Title'
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder='Enter Text'
            as="textarea"
            rows={3}
            ref={textRef}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Color</Form.Label>
          <Form.Control
            type='color'
            id='colorInput'
            defaultValue="#dfdfdf"
            ref={colorRef}
          />
        </Form.Group>

        <Button type='submit' variant='primary'>Submit</Button>
      </Form>
    </>
  );
};

export default CreateNotes;