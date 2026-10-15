import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { onCloseModal } from "../../store/modalSlice";
import Button from "./Button";

const Modal = () => {
  const isShow = useAppSelector(state => state.modal.isShow);
  const dispatch = useAppDispatch();
  return (
    <>
      {isShow && (
        <div className="bg-gray-500/50 absolute w-full h-full top-0 animate-fade-in flex items-center justify-center">
          <div className="bg-white absolute p-5 rounded-lg animate-scale-in">
            <h2 className="text-primary text-2xl font-bold mb-3">Titolo</h2>
            <Button label="Chiudi modale" onClick={() => dispatch(onCloseModal())} />
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;