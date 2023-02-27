// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '../styles.css';
import { Routes } from '@/routes';
import ToastStore from '@/stores/toastStore';
import { Toast } from '@/components/Toast';
import Drawer from '@/components/Drawer';
import { BottomNav } from '@/components/BottomNav';

export function App() {
  return (
    <ToastStore>
      <Toast />
      <Drawer>
        <Routes />
        <BottomNav />
      </Drawer>
    </ToastStore>
  );
}

export default App;
