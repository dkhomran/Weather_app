import { Platform } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider platform={Platform.OS}>
      <AppNavigation />
    </TailwindProvider>
  );
}

 