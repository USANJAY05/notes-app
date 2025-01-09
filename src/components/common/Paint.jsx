import React, { useState } from 'react';
import { Canvas, Editor, useReactPaint } from '@yorab/react-paint';

const Paint = () => {
  // States for brush size, color, and undo/redo stack
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#000000');
  const [history, setHistory] = useState([]);  {/* Removed type annotation */}
  const [currentStep, setCurrentStep] = useState(0);

  // Hook to get the editor and canvas properties
  const { editorProps, canvasProps, registerEvent } = useReactPaint({
    width: 800,
    height: 600,
    options: {
      brushSize,
      brushColor,
      canGrow: true,
      canShrink: true,
      withExport: true,
    },
  });

  // Handle Brush Size Change
  const handleBrushSizeChange = (event) => {
    setBrushSize(Number(event.target.value));
  };

  // Handle Brush Color Change
  const handleColorChange = (event) => {
    setBrushColor(event.target.value);
  };

  // Handle Undo Action
  const handleUndo = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      registerEvent('undo');
    }
  };

  // Handle Redo Action
  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
      registerEvent('redo');
    }
  };

  // Handle Clear Canvas
  const handleClear = () => {
    registerEvent('clear');
  };

  // Handle Export to Image (PNG)
  const handleExport = () => {
    const canvas = document.getElementById('paint-canvas');
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'paint-image.png';
    link.click();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>React Paint Component</h2>

      {/* Toolbar Controls */}
      <div>
        <label>
          Brush Size:
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={handleBrushSizeChange}
            style={{ marginLeft: '10px' }}
          />
        </label>

        <label>
          Brush Color:
          <input
            type="color"
            value={brushColor}
            onChange={handleColorChange}
            style={{ marginLeft: '10px' }}
          />
        </label>

        <button onClick={handleUndo} style={{ marginLeft: '10px' }}>
          Undo
        </button>
        <button onClick={handleRedo} style={{ marginLeft: '10px' }}>
          Redo
        </button>
        <button onClick={handleClear} style={{ marginLeft: '10px' }}>
          Clear Canvas
        </button>
        <button onClick={handleExport} style={{ marginLeft: '10px' }}>
          Export Image
        </button>
      </div>

      {/* Editor for Canvas */}
      <Editor editorProps={editorProps}>
        <Canvas
          id="paint-canvas"
          canvasProps={canvasProps}
          style={{
            border: '1px solid #000',
            marginTop: '20px',
            cursor: 'crosshair',
          }}
        />
      </Editor>
    </div>
  );
};

export default Paint;
