// eslint-disable-next-line react/prop-types
function Card({title,text,imgPath}) {
    return (
        <div className="card">
            <div className="card__icon-container">
                <img src={imgPath} alt={`icon ${title}`} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
    )
}

export default Card
