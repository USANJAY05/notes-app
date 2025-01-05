import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Main = () => {
  const [note, setNote] = useState('');

  // Handle changes in the editor
  const handleEditorChange = (value) => {
    setNote(value);
    console.log(value)
  };

  // Custom toolbar options with more styling options
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': ['Arial', 'Courier', 'Georgia', 'Impact', 'Times New Roman', 'Verdana'] }],
      [{ 'size': ['small', 'medium', 'large', 'huge'] }], // Font sizes
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }], // Ordered list, bullet list, and checkboxes
      ['bold', 'italic', 'underline', 'strike'], // Added strikethrough
      [{ 'align': [] }],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }], // Text color and background color
      ['blockquote', 'code-block'], // Blockquote and code block options
      ['clean'], // To clear the editor
      ['unordered-list', 'ordered-list', 'description-list'] // New lists added
    ],
  };

  return (
    <div className='w-full h-full dark:bg-black dark:text-white'>
      <div className="h-full overflow-auto">
        {/* Fixed toolbar section */}
        <div className="quill-toolbar h-[calc(100%-50px)]">
          <ReactQuill 
            value={note} 
            onChange={handleEditorChange} 
            theme="snow" 
            modules={modules}  
            placeholder="Write your note here..." 
            className='h-full border-none'
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
