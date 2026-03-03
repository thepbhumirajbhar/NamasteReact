const Contact = () => {
  return(
    <div>
      <h1 className="p-3 m-2 font-bold text-2xl text-center text-green-900 shadow-md">
        Contact Us
      </h1>
      <div className="text-left">
        <form className="flex flex-col gap-5 w-6/12 mx-auto">
        
          <input 
              type="text" 
              className="m-4 p-2 border-2 border-green-900 placeholder-gray-400"
              placeholder="Name"/>

          <textarea 
              //type="text" 
              className="m-4 p-2 h-48 border-2 border-green-900 placeholder-gray-400" 
              placeholder="message"
              rows={2}>
          </textarea>

          <button 
              className="m-2 p-1 border-2 border-green-900 rounded-lg bg-green-100">
              Submit
          </button>

        </form>
      </div> 
    </div>
  )
}

export default Contact;
