import { Text, Button } from "@chakra-ui/react";
import Modal from 'react-modal';

interface Props {
  open: boolean;
  setOpen: (param: boolean) => void;
}

export function MovieModal({ open, setOpen }: Props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const close = () => {
    setOpen(!open);
  };
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Example Modal"
    >
		<Text>Testando</Text>
    </Modal>
  );
}
