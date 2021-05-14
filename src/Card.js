
const Card = ({name, info, _class}) => {
    return(
        <div className={_class}>
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    );
}


export default Card;