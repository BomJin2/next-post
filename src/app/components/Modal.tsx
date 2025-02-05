type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="flex fixed top-0 left-0 w-full h-full bg-black/50 z-40 justify-center items-center z-1 " onClick={onClose}>
      <dialog open className="flex fixed rounded-lg overflow-hidden z-1">
        {children}
      </dialog>
    </div>
  );
}
export default Modal;
