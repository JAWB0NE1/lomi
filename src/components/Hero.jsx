function Hero() {
  function rame() {
    window.location.href = '/mp'
  }
  
  return (
    
    <div className="bg-[url(/image2.png)] bg-cover h-screen w-screen " id="hero">
      
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-green-700 font-bold text-4xl" id="glow2">Do Yourself a Favor</h1>
      <h1 className="text-3xl text-green-600 font-bold" id="glow" onClick={rame}>J O I N⠀U S</h1>
      </div>
    </div>
  )
}

export default Hero
