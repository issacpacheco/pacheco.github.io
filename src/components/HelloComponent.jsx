function HelloComponent() {
    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={() => console.log('Button clicked')}>
                Click me
            </button>
        </div>
    )
}

export default HelloComponent;