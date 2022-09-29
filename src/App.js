import "./App.css";
import "@atlaskit/css-reset/dist/bundle.css";

import { Editor } from "@atlaskit/editor-core";
import { IntlProvider } from "react-intl-next";

function App() {
  return (
    <div className="App">
      <IntlProvider locale="en">
        <Editor appearance="full-page" />
      </IntlProvider>
    </div>
  );
}

export default App;
