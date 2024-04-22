import { ConfigProvider, theme } from 'antd'
import Home from 'pages/home'
import useTheme from 'store/theme'

function App() {
  const lightTheme = useTheme(state => state.light)

  return (
    <ConfigProvider
      theme={{
        algorithm: lightTheme ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <Home />
    </ConfigProvider>
  )
}

export default App
