import * as S from "./App.ts";
import { About } from "./presentation/components/About";
import { Contact } from "./presentation/components/Contact";
import { Footer } from "./presentation/components/Footer/index.tsx";
import { Header } from "./presentation/components/Header";
import { Home } from "./presentation/components/Home";
import { Projects } from "./presentation/components/Projects";

function App() {
  return (
    <S.StyledDiv>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </S.StyledDiv>
  );
}

export default App;
