import "./App.css";

import Header from "./components/Header";
import Survey from "./components/Survey";

/* eslint-disable react/prop-types */

export default function App() {

  const onChange = () => {
    //
  }
  return (
    <>
      <Header />
      <Survey onChange={onChange}/>
    </>
  );
}
