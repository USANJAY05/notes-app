import fetchAIResponse from "./fetchAiResponse";
import { marked } from "marked"; // This is to convert Markdown to HTML

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


export default handleRephrase;
