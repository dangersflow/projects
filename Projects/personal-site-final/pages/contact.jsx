import BackgroundWrapper from "../components/BackgroundWrapper";
import ContactContent from "../components/PageContent/ContactContent";
import bg4 from "../public/background-final-4.png";

export default function About() {
  return (
    <BackgroundWrapper bg={bg4.src}>
      <ContactContent />
    </BackgroundWrapper>
  );
}
