import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import fetchAIResponse from "../utils/fetchAiResponse";
import { marked } from "marked"; // This is to convert Markdown to HTML

const Notes = () => {
  const [note, setNote] = useState("");
  const quillRef = useRef(null);

  // Handle changes in the editor
  const handleEditorChange = (value) => {
    setNote(value);
  };

  // Function to rephrase selected text with custom user input
  const handleRephrase = async () => {
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection(); // Get the selected range

    if (range && range.length > 0) {
      const selectedText = editor.getText(range.index, range.length); // Get the selected text

      // Prompt the user for custom rephrase instructions
      const customText = prompt("Enter custom rephrase instructions:");

      if (customText) {
        try {
          const response = await fetchAIResponse(
            `${customText}\n\n${selectedText}`
          );

          console.log("AI Response:", response); // Log the response to see what's returned
          
          // If the response contains markdown, convert it to HTML
          if (response && typeof response === "string") {
            const htmlContent = marked(response); // Convert Markdown to HTML
            console.log(htmlContent);
            
            // Use dangerouslyPasteHTML to insert the HTML content
            editor.deleteText(range.index, range.length); // Remove the old text
            editor.clipboard.dangerouslyPasteHTML(range.index, htmlContent); // Insert HTML content
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
    } else {
      alert("No text selected to rephrase!");
    }
  };

  // Custom toolbar configuration
  const modules = {
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
        ["clean"]
      ],
    },
  };

  return (
    <div className="w-full h-full dark:bg-black dark:text-white">
      <div id="custom-toolbar" className="">
        <button
          onClick={handleRephrase}
          className="bg-green-500 text-white px-3 py-1 rounded absolute right-0"
        >
          Rephrase
        </button>
        {/* Rephrase Button
        <BsStars 
          className="w-8 h-8 absolute right-0"
          onClick={handleRephrase}
        /> */}
      </div>

      <ReactQuill
        ref={quillRef}
        value={note}
        onChange={handleEditorChange}
        theme="snow"
        modules={modules}
        className="h-[calc(100%-50px)] dark:text-white"
      />
    </div>
  );
};

export default Notes;
