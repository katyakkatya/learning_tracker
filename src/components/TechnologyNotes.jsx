const TechnologyNotes = ({ notes, onNotesChange, techId }) => {
    return (
        <div className="notes-section">
            <h4 className="notes-title">Мои заметки:</h4>
            <textarea
                className="notes-textarea"
                value={notes}
                onChange={(e) => onNotesChange(techId, e.target.value)}
                placeholder="Записывайте сюда важные моменты..."
                rows="3"
                onClick={(event) => event.stopPropagation()}
            />
            <div className="notes-hint">
                {notes.length > 0 ? `Заметка сохранена (${notes.length} символов)` : 'Добавьте заметку'}
            </div>
        </div>

    )
}

export default TechnologyNotes
