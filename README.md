# Reference notes

## Installation
Follow get-started documentation here first: https://atlaskit.atlassian.com/get-started
  - Install @atlaskit/editor-core peer dependencies first
    - react-intl may need to be installed with an npm alias
    - Other peer dependencies not mentioned here (but mentioned in editor-core package.json) include @atlaskit/link-provider and @atlaskit/media-core (See peerDependencies here: https://unpkg.com/browse/@atlaskit/editor-core@172.2.0/package.json)
    - Example command: npm i @atlaskit/link-provider@^1.2.6 @atlaskit/media-core@^33.0.2 react-intl-next@npm:react-intl@^5.18.1 styled-components@^3.2.6
  - If possible, downgrade to version of React that editor-core currently supports (^16.8.0)
  - Include Atlaskit CSS reset
- Then install @atlaskit/editor-core

## Errors

> #### 1. Compile warning: Should not import the named export 'version'

```
Compiled with problems:

ERROR in ./node_modules/@atlaskit/analytics-listeners/dist/esm/atlas/process-event.js 91:21-36

Should not import the named export 'version' (imported as 'listenerVersion') from default-exporting module (only default export is available soon)

```

You can ignore this for now by clicking X to close the window in Development Mode (it's a compile warning so it shouldn't break the build and is solved in a future release).  

> #### 2. Runtime warning: Uncaught Error: [React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.

You can ignore this if you're choosing not to set up your own IntlProvider around the Editor (it is not a blocking runtime error and should also be resolved in a future release).

If you want to avoid the error, you will need to setup an IntlProvider like below:

```
import { IntlProvider } from 'react-intl-next';

<IntlProvider locale="en">
  <Editor appearance="comment">
</IntlProvider>

```