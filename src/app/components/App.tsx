import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';

const EXPORT_TYPES = {
  DEFAULT: 'default',
  BLOCK: 'block',
};

function App() {
  const [exportType, setExportType] = useState(EXPORT_TYPES.DEFAULT);

  const onExport = (type: string) => {
    parent.postMessage({ pluginMessage: { type: `export-${type}` } }, '*');
    console.log(type);
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  console.log(exportType);

  return (
    <div>
      <img src={logo} />
      <h2>Figma Franklin Exporter</h2>
      <div>
        <input
          id="radio1"
          type="radio"
          name="exportType"
          value={EXPORT_TYPES.DEFAULT}
          checked={exportType === EXPORT_TYPES.DEFAULT}
          onChange={(e) => setExportType(e.currentTarget.value)}
        />
        <label htmlFor="radio1">Default Content</label>
        <input
          id="radio2"
          type="radio"
          name="exportType"
          value={EXPORT_TYPES.BLOCK}
          checked={exportType === EXPORT_TYPES.BLOCK}
          onChange={(e) => setExportType(e.currentTarget.value)}
        />
        <label htmlFor="radio2">Block</label>
      </div>
      <button id="export" onClick={() => onExport(exportType)}>
        Export
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default App;
