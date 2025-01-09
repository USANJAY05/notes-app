import React, { useRef, useEffect, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import fetchAIResponse from "../utils/fetchAiResponse.js";
import { marked } from "marked";
import { useDispatch, useSelector } from "react-redux";
import { addItems, updateNoteContent, deleteItem } from "../redux/slice/items-slice.js";
import { setNote } from "../redux/slice/note-slice.js";
import { useNavigate, useParams } from "react-router";
import { debounce } from "lodash";
import { SiGooglegemini } from "react-icons/si";
import { setSideBarId } from "../redux/slice/sideBarActive-slice.js";
import { v4 as uuidv4 } from 'uuid'; // Import uuid function


const Notes = () => {
  const note = useSelector((state) => state.note.notes);
  const notes = useSelector((state) => state.items.notes);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const quillRef = useRef(null);

  // Debounced editor change handler
  const handleEditorChange = useMemo(() => {
    const debouncedChange = debounce((value) => {
      dispatch(setNote(value));
    }, 300);

    return debouncedChange;
  }, [dispatch]);

  // Fetch the existing note content
  useEffect(() => {
    if (id) {
      const existingNote = notes.find((note) => note.id === id); // Use id directly as string
      if (existingNote) {
        dispatch(setNote(existingNote.content));
      } else {
        dispatch(setNote(""));
      }
    }
    dispatch(setSideBarId(id))
  }, [id, notes, dispatch]);

  // Save the note content
  const saveNote = () => {
    const cleanedNote = note.replace(/<p>\s*<br\s*\/?>\s*<\/p>/g, "").trim();

    if (!cleanedNote) {
      if (id && window.confirm("Are you sure you want to delete this note?")) {
        dispatch(deleteItem({ id: id })); // Use id as a string
        navigate("/");
      }
      return;
    }

    if (id) {
      dispatch(updateNoteContent({ id: id, content: note })); // Use id as a string
    } else {
      
      const newNote = {
        id: `${uuidv4()}-${Date.now()}`,  // Combine UUID with current timestamp
        content: note,
        checked: false,
      };
      dispatch(addItems(newNote));
      navigate(`/notes/${newNote.id}`);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      saveNote();
    }, 0);

    return () => clearTimeout(timeout);
  }, [note]);

  // Rephrase selected text
  const handleRephrase = async () => {
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    const selectedText = editor.getText(range.index, range.length);
    const customText = prompt("Enter custom rephrase instructions:");

    if (customText) {
      try {
        const response = await fetchAIResponse(`${customText}\n\n${selectedText}`);

        if (response && typeof response === "string") {
          const htmlContent = marked(response);
          editor.deleteText(range.index, range.length);
          editor.clipboard.dangerouslyPasteHTML(range.index, htmlContent);
        } else {
          alert("Invalid response format!");
        }
      } catch (error) {
        console.error("Error rephrasing text:", error);
        alert("Failed to rephrase text.");
      }
    } else {
      alert("No custom text entered!");
    }
  };

  // Memoized modules for React Quill
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: ["small", "medium", "large", "huge"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike"],
        [{ align: [] }],
        ["link", "image"],
        [{ color: [] }, { background: [] }],
        ["blockquote", "code-block"],
        ["clean"],
      ],
    },
  }), []);

  return (
    <div className="w-full h-full dark:bg-black dark:text-white">
      <div className="flex z-10 justify-between items-center mb-4 fixed right-0">
        <button
          onClick={handleRephrase}
          className=" dark:text-white text-xl w-10 h-10 rounded hover:text-yellow-300"
        >
          <SiGooglegemini />
        </button>
      </div>

      <ReactQuill
        ref={quillRef}
        value={note}
        onChange={handleEditorChange}
        theme="snow"
        modules={modules}
        className="h-full dark:text-white overflow-auto"
      />
    </div>
  );
};

export default Notes;
