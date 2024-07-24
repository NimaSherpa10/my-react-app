function App() {
  return (
    <>
      <header
        style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px" }}
      >
        <nav style={{ marginBottom: "20px" }}>
          <h1 style={{ margin: "0" }}>My App</h1>
          <a
            href="#Contact"
            style={{
              color: "white",
              marginRight: "10px",
              float: "right",
            }}
          >
            Contact
          </a>
          <a
            href="#about"
            style={{ color: "white", marginRight: "20px", float: "right" }}
          >
            About
          </a>
          <a
            href="#home"
            style={{ color: "white", marginRight: "20px", float: "right" }}
          >
            Home
          </a>
        </nav>
      </header>
      <main style={{ padding: "20px" }}>
        <section>
          <article style={{ marginBottom: "20px" }}>
            <h2>Welcome</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              <br></br>
              Commodi iusto eos aspernatur iure soluta eveniet maiores
              asperiores veniam,<br></br> numquam nemo voluptatem atque ut,
              perferendis exercitationem velit neque magni omnis est.
            </p>
          </article>
        </section>
        <aside style={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
          <h3>Related Links</h3>
          <a href="#link1" style={{ display: "block", marginBottom: "5px" }}>
            Link 1
          </a>
          <a href="#link2" style={{ display: "block" }}>
            Link 2
          </a>
        </aside>
      </main>
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <p>&copy; 2024 My App</p>
      </footer>
    </>
  );
}

export default App;
