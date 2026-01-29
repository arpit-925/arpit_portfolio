import SocialBar from "./components/SocialBar";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialBar />   {/* 👈 ADD HERE */}
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </div>
  );
};
