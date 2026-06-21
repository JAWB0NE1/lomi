function Cu() {
  function rame() {
    window.location.href = '/mp'
  }
  function rame2() {
    window.location.href = 'https://www.facebook.com/nika11keshelava/'
  }
  function rame3() {
    window.location.href = 'https://www.facebook.com/nika1keshelava/'
  }
  return (
    <div className="bg-[url(/code.png)] bg-cover h-screen w-full p-[10px] flex flex-col justify-center gap-[150px] items-center" id="min">
        <p className="text-green-500 font-bold text-[20px] md:text-[40px]" >To join us klick <button onClick={rame2} id="glow2" className="text-green-700">GOA</button></p>
        <p className="text-green-500 font-bold text-[17px] md:text-[40px]" >or lear martial arts with <button onClick={rame3} id="glow2" className="text-green-700">GOA MMA</button></p>


        <p className="text-green-500 font-bold text-[20px] md:text-2xl">Return by Clicking <button className=" " onClick={rame}>goose🦆</button></p>
    </div>
    
  )
}

export default Cu