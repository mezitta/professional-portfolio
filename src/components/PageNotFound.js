import "./PageNotFound.css"

const PageNotFound = () => {
    return (
        <div className="container-fluid">
            <div className="container pnf-container">
                <div className="pnf-wrapper">
                    <h1>Page not found</h1>
                    <h2>
                        <a href="/">Back to Site</a>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;