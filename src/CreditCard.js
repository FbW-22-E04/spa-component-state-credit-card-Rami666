function CreditCard(props) {
    return <div>

<div>
    <h1>{props.bank}</h1>
    <div>
        <p>{props.cardNum}</p>
    </div>
    <div>
        <p>{props.exDate}</p>
    </div>
    <div>
        <p>{props.cosName}</p>
    </div>
</div>



    </div>
}

export default CreditCard;