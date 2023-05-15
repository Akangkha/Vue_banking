import Signup1 from "./Signup1";
import Signup2 from "./Signup2";
import Signup3 from "./Signup3";
import Signup4 from "./Signup4";
import Success from "./Success";
import { Fragment, useState } from "react";

export default function Signup() {
  const updateMain = (n) => {
    switch (n) {
      case "0":
        setMain(<Signup1 updateMain={updateMain} />);
        break;
      case "1":
        setMain(<Signup2 updateMain={updateMain} />);
        break;
      case "2":
        setMain(<Signup3 updateMain={updateMain} />);
        break;
      case "3":
        setMain(<Signup4 updateMain={updateMain}/>);
        break;
    
    }
  };
  const [main, setMain] = useState(<Signup1 updateMain={updateMain} />);
  return <Fragment>{main}</Fragment>;

}