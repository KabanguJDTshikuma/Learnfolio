
function Message() {

    const name = 'Kabangu'
    if(name)
        return <h1>Hello {name}</h1>; // JSX: JavaScript XML
    return <div>Hello World</div>;
}

export default Message;