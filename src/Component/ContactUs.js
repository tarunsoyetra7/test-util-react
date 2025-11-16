export default function ContactUs() {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Have questions or need support? We'd love to hear from you. Fill out the form below
          and our team will get back to you shortly.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
