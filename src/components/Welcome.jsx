import Footer from "./Footer";
import WelcomeMenu from "./WelcomeMenu";

function Welcome() {
  return (
    <div>
      <WelcomeMenu />

      <img
        src="emp.jpg"
        alt="Restaurant Banner"
        className="w-full mt-2 h-auto object-cover rounded-b-lg shadow-md"
      />

      <Footer />
    </div>
  );
}

export default Welcome;
