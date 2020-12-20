import './PageBtn.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const PageBtn = ({ users, goToNextPage, goToPrevPage, limit, setLimit }) => {
    return (
        <div className="page-btn-container">
            <span className="entries-limit">
                Show
            <input
                    value={limit} onChange={(e) => setLimit(e.target.value)}
                    type="number" min="10" max="50"
                />users
            </span>
            <span className="page-btn-group">
                {users.prev ?
                    <button
                        onClick={goToPrevPage}>
                        <FiArrowLeft />
                    </button> : null}
                {users.next ?
                    <button
                        onClick={goToNextPage}>
                        <FiArrowRight />
                    </button> : null}
            </span>
        </div>
    )
}

export default PageBtn;