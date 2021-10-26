import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
function Landing() {
  return (
    <>
      <Header variant="light" />
      <Container>
        <div>
          <h1>
            Solusi terbaik untuk <br />
            mengelola usaha <br />
            kamu!
          </h1>
          <div>
            <Button variant="primary">Daftar Sekarang</Button>
            <Button variant="outlinePrimary">Pelajari Dulu!</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Landing;
