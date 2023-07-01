import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  const { setIsModalOpen, isModalOpen } = useGlobalContext()
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button
          type="button"
          className="close-modal-btn"
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  )
}
export default Modal
