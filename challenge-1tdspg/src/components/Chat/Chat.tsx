import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import Send from '../../img/content/agenda/send.png'

export default function Chat() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} >
        <FaComments />
      </button>

      {modal && (
        <div >
          <div >
            <button onClick={toggleModal} >
              <FaTimes />
            </button>
            <h2 >Chat</h2>
            <p >Seu conteúdo do chat aqui...</p>
            <div >
              <input type="text" />
              <img src={Send} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}