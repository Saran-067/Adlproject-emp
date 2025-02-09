import './App.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Slider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <h1 className="text-3xl text-red-600 font-bold underline">
      Hello world!
    </h1>
    <Slider
      color="orange"
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
    </MantineProvider>
  );
}

export default App;
