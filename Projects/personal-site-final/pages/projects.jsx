import BackgroundWrapper from "../components/BackgroundWrapper";
import ProjectsContent from "../components/PageContent/ProjectsContent";
import bg3 from "../public/background-final-3.png";

export default function About() {
  return (
    <>
      (
      <BackgroundWrapper bg={bg3.src}>
        <ProjectsContent />
      </BackgroundWrapper>
      )
    </>
  );
}
