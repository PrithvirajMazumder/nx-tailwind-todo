// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '../styles.css';
import { Routes } from '@/routes';
import ToastStore from '@/stores/toastStore';
import { Toast } from '@/components/Toast';

export function App() {
  return (
    <ToastStore>
      <Toast />
      <Routes />
    </ToastStore>
  );
}

export default App;
