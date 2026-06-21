function Mp() {
  function rame() {
    window.location.href = '/min'
  }
  function rame2() {
    window.location.href = '/cu'
  }
  function rame3() {
    window.location.href = '/mmi'
  }


  return (
    <div className="bg-[url(/code.png)] bg-cover h-screen w-full p-[10px] flex flex-col justify-center gap-[70px] md:gap-[150px] items-center" id="mp">
      
      <div className="flex gap-5 md:gap-25 justify-center absolute top-10" id="mp2">
        
        <button className="text-green-500 font-bold text-md md:text-2xl" id="glow4" onClick={rame}>More Information</button>
        <button className="text-green-500 font-bold text-md md:text-2xl" id="glow4" onClick={rame2}>Contact US</button>
        <button className="text-green-500 font-bold text-md  md:text-2xl" id="glow4" onClick={rame3}>GOA MMA Information</button>
      </div>
      <img src="./logo4k.png" alt="" className="w-[300px] md:w-[500px] mt-30"/>
      <p className="text-green-700 font-bold max-w-[1200px] text-xl md:text-3xl" id="glow3">What is GOA? GOA Stands for Goal-Oriented-Academy and it's one of best coding academy in Georgia, here you can learn Game Development, Web Developing, Cybersecurity but if you're not much of coding guy you can try GOA-MMA. all information you can get by clicking buttons on top</p>

      
    </div>
    
  )
}

export default Mp