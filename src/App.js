import { Fragment } from "react";
import "./App.css";
import BakedFresh from "./components/Home/BakedFresh/BakedFresh";
import BestIngredients from "./components/Home/BestIngredients/BestIngredients";
import ExploreFood from "./components/Home/ExploreFood/ExploreFood";
import FAQ from "./components/Home/FAQ/FAQ";
import Footer from "./components/Home/Footer/Footer";
import Header from "./components/Home/Header/Header";
import Navs from "./components/Home/Navs/Navs";
import Numbers from "./components/Home/Numbers/Numbers";
import Quote from "./components/Home/Quote/Quote";
import RealFood from "./components/Home/RealFood/RealFood";
import Slider from "./components/Home/Slider/Slider";
import Subscribe from "./components/Home/Subscribe/Subscribe";

function App() {
  return (
    <Fragment>
      <Navs />
      <Header />
      <Numbers />
      <RealFood />
      <BestIngredients />
      <Quote />
      <ExploreFood />
      <Slider />
      <FAQ />
      <BakedFresh />
      <Subscribe />
      <Footer />
    </Fragment>
  );
}

export default App;
