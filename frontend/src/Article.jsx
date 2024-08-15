import PropTypes from 'prop-types';
export function Article({urlToImage,url,title,author,description}){
    return(
        <>
        
        <fieldset style={{ margin: "5px" }}>
            <a href={url} style={{ textDecoration: "none" }}>
                <div className="row" style={{ minHeight: "70px" }}>
                    <div className="card d-flex flex-row align-items-stretch" style={{ width: "100%", }}>
                        <div className="col-6 p-0" style={{marginRight:"10px"}}>
                            <img
                                src={urlToImage}
                                alt="articleImage"
                                className="card-img"
                                style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <div>
                                <h5>{title}</h5>
                                <p>{author}</p>
                                <p style={{ fontSize: "0.7em" }}>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            </fieldset>

        </>
    )
}

export default Article;


Article.propTypes = {
    urlToImage: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishedAt:PropTypes.string.isRequired
  };