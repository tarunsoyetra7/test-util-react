export default function ContactUs(props) {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: props.textAreaStyle.color }}>Contact Us</h2>
        <p className="mx-auto" style={{ maxWidth: "600px" , color: props.textAreaStyle.color }}>
          Have questions or need support? We'd love to hear from you. Fill out the form below
          and our team will get back to you shortly.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form>
            <div className="mb-3">
              <label className="form-label" style={{ color: props.textAreaStyle.color }}>Full Name</label>
              <input type="text" style={{backgroundColor: props.textAreaStyle.backgroundColor, color: props.textAreaStyle.color}} className="form-control"  />
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ color: props.textAreaStyle.color }}>Email Address</label>
              <input type="email" style={{backgroundColor: props.textAreaStyle.backgroundColor, color: props.textAreaStyle.color}} className="form-control"  />
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ color: props.textAreaStyle.color }}>Message</label>
              <textarea style={{backgroundColor: props.textAreaStyle.backgroundColor, color: props.textAreaStyle.color}} className="form-control" rows="4"></textarea>
            </div>

            <button type="submit" className={`btn btn-${props.mode === 'dark' ? 'outline-info' : 'primary'} w-100`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
