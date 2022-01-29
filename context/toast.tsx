import Box from '@sweatpants/box';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TIMEOUT = 5000;

type ToastContextTypes = {
  toast: (m: string) => void;
};

const ToastContext = React.createContext<ToastContextTypes>({
  toast: () => {},
});

export function useToastContext() {
  return React.useContext(ToastContext);
}

type ToastProps = {
  children?: React.ReactNode;
};

function ToastProvider(props: ToastProps): JSX.Element {
  const [current, setCurrent] = React.useState<string>('');

  function toast(message: string) {
    setCurrent(message);
  }

  React.useEffect(() => {
    if (current) {
      window.setTimeout(() => {
        setCurrent('');
      }, TIMEOUT);
    }
  }, [current]);

  return (
    <ToastContext.Provider
      value={{
        toast,
      }}
    >
      {props.children}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '4rem',
              right: '4rem',
              pointerEvents: 'none',
              zIndex: 1000,
              originY: 0,
            }}
          >
            <Box display="flex" alignItems="center" bg="#0000ff" color="#fff" p="500">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M8 10.5V10H7v.5h1zm-1 .01v.5h1v-.5H7zM7 4v4h1V4H7zm0 6.5v.01h1v-.01H7zm.5 3.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
                  fill="currentColor"
                ></path>
              </svg>
              <Box pl="400">{current}</Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
