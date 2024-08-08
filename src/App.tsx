import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="frame">
      <img className="range1" src="/olympiquiz-1.svg"/>
      <img className="qrcode" src="/olympiquiz-qr-code.svg"/>
      <Outlet />
      <img className="range2" src="/olympiquiz-2.svg"/>
    </div>
  );
}

export default App;
