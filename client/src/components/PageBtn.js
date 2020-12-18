

const PageBtn = ({ users, goToNextPage, goToPrevPage }) => {
    return (
        <div>
            {users.prev ?
                <button
                    onClick={goToPrevPage}>
                    Prev
                </button> : null}
            {users.next ?
                <button
                    onClick={goToNextPage}>
                    Next
                </button> : null}

        </div>
    )
}

export default PageBtn;