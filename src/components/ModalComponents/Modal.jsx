function Modal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title: event.target.title.value,
      date: event.target.date.value,
      status: event.target.status.value
    };
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Enviar Nova Atividade</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input type="text" name="title" placeholder="Título da Atividade" required />
          </label>
          <label>
            Data:
            <input type="date" name="date" required />
          </label>
          <label>
            Status:
            <select name="status">
              <option value="Pendente">Pendente</option>
              <option value="Concluído">Concluído</option>
            </select>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;