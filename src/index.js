import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './grid'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

ReactDOM.render(<Grid />, document.getElementById('react-root'))
