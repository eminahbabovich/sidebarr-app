import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { setIsModalOpen, setIsSidebarOpen, isSidebarOpen, isModalOpen } =
    useGlobalContext()
  return (
    <div>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>
      {!isModalOpen && (
        <button
          className="btn"
          type="button"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Show Modal
        </button>
      )}
    </div>
  )
}
export default Home
