const Contact = () =>{
    return (
        <div className="contact">
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
            <form>
                <input className="border border-gray-500 m-2 p-2" type="text" placeholder="Name"/>
                <input className="border border-gray-500 m-2 p-2" type="text" placeholder="Message"/>
                <button className="border border-gray-500 bg-gray-500 rounded-lg m-2 p-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;