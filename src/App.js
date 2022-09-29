import "./App.css";
import '@atlaskit/css-reset/dist/bundle.css'

import { Editor } from "@atlaskit/editor-core";

function App() {
  return (
    <div className="App">
      <Editor appearance="full-page" />
    </div>
  );
}

export default App;
