import * as S from "./App.ts";
import { About } from "./presentation/Sections/About/index.tsx";
import { Contact } from "./presentation/Sections/Contact/index.tsx";
import { Home } from "./presentation/Sections/Home/index.tsx";
import { Projects } from "./presentation/Sections/Projects/index.tsx";
import { Footer } from "./presentation/Components/Footer/index.tsx";

function App() {
  return (
    <S.StyledDiv>
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
