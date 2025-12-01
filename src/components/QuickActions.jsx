import { useState } from "react";
import Modal from "./Modal";

const QuickActions = ({
  setStatusComplete,
  setStatusNotStarted,
  setRandomInProgress,
  technologies
}) => {
    const [showExportModal, setShowExportModal] = useState(false);
    const handleExport = () => {
        const data = {
        exportedAt: new Date().toISOString(),
        technologies: technologies,
        };
        const dataStr = JSON.stringify(data, null, 2);
        // Здесь можно добавить логику для скачивания файла
        console.log("Данные для экспорта:", dataStr);
        setShowExportModal(true);
    };

    return (
      <div>
        <div className="quick-actions-btns">
          <button
            className="quick-actions-btn"
            type="button"
            onClick={setStatusComplete}
          >
            Отметить все как выполненные
          </button>
          <button
            className="quick-actions-btn"
            type="button"
            onClick={setStatusNotStarted}
          >
            Сбросить все статусы
          </button>
          <button
            className="quick-actions-btn"
            type="button"
            onClick={setRandomInProgress}
          >
            Случайный выбор следующей технологии
          </button>
          <button
            className="quick-actions-btn"
            type="button"
            onClick={handleExport}
          >
            Экспорт данных
          </button>
        </div>
        <Modal
          isOpen={showExportModal}
          onClose={() => setShowExportModal(false)}
          title="Экспорт данных"
        >
          <p>Данные успешно подготовлены для экспорта!</p>
          <p>Проверьте консоль разработчика для просмотра данных.</p>
          <button onClick={() => setShowExportModal(false)} className="close-btn">Закрыть</button>
        </Modal>
      </div>
    );
};

export default QuickActions;
