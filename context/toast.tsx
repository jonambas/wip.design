import Box from '@sweatpants/box';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Check from '@icons/Check';

const TIMEOUT = 5000;

type ToastContextTypes = {
  toast: (m: string) => void;
};

const ToastContext = React.createContext<ToastContextTypes | undefined>(undefined);

export function useToastContext() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
}

type ToastProps = {
  children?: React.ReactNode;
};

function ToastProvider(props: ToastProps): JSX.Element {
  const [list, setList] = React.useState<{ id: string; message: string }[]>([]);

  function toast(message: string) {
    const id = `${new Date().getTime()}`;
    setList([...list, { id, message }]);
  }

  function dismiss(id: string) {
    const index = list.findIndex((e) => e.id === id);
    if (index !== -1) {
      const newList = list;
      newList.splice(index, 1);
      setList([...newList]);
    }
  }

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (list.length) {
        dismiss(list[0].id);
      }
    }, 3000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [list]);

  return (
    <ToastContext.Provider
      value={{
        toast,
      }}
    >
      {props.children}
      <Box
        position="fixed"
        top="4rem"
        right="4rem"
        zIndex="1000"
        style={{
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence>
          {list.map(({ id, message }) => {
            return <Toast key={id} message={message} />;
          })}
        </AnimatePresence>
      </Box>
    </ToastContext.Provider>
  );
}

function Toast({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.3, 1] }}
      style={{
        originY: 0,
      }}
    >
      <Box display="flex" alignItems="center" bg="#0000ff" color="#fff" p="500" mb="200">
        <Check />
        <Box pl="400">{message}</Box>
      </Box>
    </motion.div>
  );
}

export default ToastProvider;
