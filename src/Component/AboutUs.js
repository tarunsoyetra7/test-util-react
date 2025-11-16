export default function AboutUs(props) {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: props.textAreaStyle.color }}>About Us</h2>
        <p className="mx-auto" style={{ maxWidth: '700px', color: props.textAreaStyle.color  }}>
          We are a dedicated team focused on creating high-quality digital
          solutions. Our mission is to empower users through simple, scalable,
          and impactful technology.
        </p>
      </div>

      <div className="row g-4 mt-4">
        <div className="col-md-4">
          <div className="p-4 border rounded h-100" style = {{ backgroundColor: props.textAreaStyle.backgroundColor}}>
            <h4 className="fw-semibold" style={{ color: props.textAreaStyle.color }}>Our Vision</h4>
            <p className="mb-0" style={{ color: props.textAreaStyle.color }}>
              To build technology that makes life simpler and more efficient for
              everyone.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded h-100" style = {{ backgroundColor: props.textAreaStyle.backgroundColor}}>
            <h4 className="fw-semibold" style={{ color: props.textAreaStyle.color }}>Our Values</h4>
            <p className="mb-0" style={{ color: props.textAreaStyle.color }}>
              We believe in honesty, innovation, teamwork, and continuous
              improvement.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded h-100" style = {{ backgroundColor: props.textAreaStyle.backgroundColor}}>
            <h4 className="fw-semibold" style={{ color: props.textAreaStyle.color }}>Our Team</h4>
            <p className="mb-0" style={{ color: props.textAreaStyle.color }}>
              A group of passionate developers, designers, and creators working
              together to deliver great user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
