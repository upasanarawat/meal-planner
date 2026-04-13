import React from 'react'
import ReactDOM from 'react-dom/client'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider } from 'baseui'
import theme from './theme'
import App from './App'
import './index.css'

const engine = new Styletron()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
)
