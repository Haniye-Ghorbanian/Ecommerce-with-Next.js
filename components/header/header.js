import Filters from "../filter/filters";
import WelcomeBanner from "./welcomeBanner";
import Search from "./search";
import Profile from "./profile";

export default function Header() {
  return (
    <div className="fixed top-16 w-full">
      
      <WelcomeBanner />
      <Search />
      <Filters />
    </div>
  );
}
