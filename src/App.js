import { BrowserRouter as Router } from 'react-router-dom'
import * as S from './App.styled'
import AppRoutes from './routes'
import React from 'react'

function App() {
  return (
    <S.MainApp>
      <Router>
        <AppRoutes />
      </Router>
    </S.MainApp>
  )
}

export default App
