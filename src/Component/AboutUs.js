export default function AboutUs() {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">About Us</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          We are a dedicated team focused on creating high-quality digital
          solutions. Our mission is to empower users through simple, scalable,
          and impactful technology.
        </p>
      </div>

      <div className="row g-4 mt-4">
        <div className="col-md-4">
          <div className="p-4 border rounded bg-light h-100">
            <h4 className="fw-semibold">Our Vision</h4>
            <p className="text-muted mb-0">
              To build technology that makes life simpler and more efficient for
              everyone.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded bg-light h-100">
            <h4 className="fw-semibold">Our Values</h4>
            <p className="text-muted mb-0">
              We believe in honesty, innovation, teamwork, and continuous
              improvement.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded bg-light h-100">
            <h4 className="fw-semibold">Our Team</h4>
            <p className="text-muted mb-0">
              A group of passionate developers, designers, and creators working
              together to deliver great user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
