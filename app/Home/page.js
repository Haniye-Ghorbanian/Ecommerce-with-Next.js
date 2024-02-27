import Header from "./components/Header";
import WelcomeBanner from "./components/welcomeBanner";
import Search from "./components/search";
import Filters from "./components/filters";
import Products from "./components/products";
import FooterMenu from "./components/footerMenu";


export default function Home() {
  return (
    <div className="relative">
      
      <Header />
      <WelcomeBanner />
      <Search />
      <Filters />
      <Products />
      <FooterMenu />
    </div>
  );
}
