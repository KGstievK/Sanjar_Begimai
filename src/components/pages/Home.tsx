"use client"
import Gps from "./Gps/Gps"
import NikhahSection from "./Nikhah/NikhahSection"
import SoTimes from "./SoTime/SoTimes"
import Timer from "./Timer/Timer"

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "flex-start",
      gap: '50px',
      position: "relative",
      top: "-60px"
    }}>
      <NikhahSection/>
      <SoTimes/>
      <Timer/>
      <Gps/>

    </div>

  )
}

export default Home