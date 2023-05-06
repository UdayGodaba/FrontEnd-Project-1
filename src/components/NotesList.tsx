import React from 'react';
import { notesModel } from '../models/noteModel';
import Notes from './Notes';

interface NotesListProps {
  notes: notesModel[],
  setNotes: React.Dispatch<React.SetStateAction<notesModel[]>>
}

const NotesList: React.FunctionComponent<NotesListProps> = ({ notes, setNotes}) => {

  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const renderNotes = () => {
    return notes.map(note => {
      return <Notes note={note} handleDelete={handleDelete}/>
    });
  };

  return (
    <>
      <h2 className='mt-3'>Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;