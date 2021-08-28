import Main from "Components/Main";
import { useSelector } from "react-redux";
import Modal from "Components/Modal";

function App() {
  const modal = useSelector((state) => state.modal);

  return (
    <div className="app">
      <Main />
      {modal.show && <Modal title={modal.title}>{modal.content}</Modal>}
    </div>
  );
}

export default App;
