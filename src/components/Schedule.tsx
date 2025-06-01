const Schedule = () => {
  return (
    <div id="schedule" className="flex flex-col items-center justify-center mt-20 overflow-x-hidden">
      <p className="uppercase text-6xl font-black font-naum">Schedule</p>
      <div className="flex flex-row gap-8 mt-12 w-full justify-center flex-wrap">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-80 flex flex-col items-center justify-between text-center">
          <div>
          <div className="text-brand-green text-3xl font-bold mb-2">July 5, Sat</div>
          <div className="text-brand-black text-xl font-semibold mb-1">A park in OC</div>
          </div>
          <div className="text-gray-600 text-center">Join us for our first pop-up at a park in OC! Enjoy fresh bites and meet the team.</div>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-80 flex flex-col items-center justify-between text-center">
          <div>
          <div className="text-brand-green text-3xl font-bold mb-2">August 16, Sat</div>
          <div className="text-brand-black text-xl font-semibold mb-1">Ricca Children's Learning Center</div>
          </div>
          <div className="text-gray-600 text-center">We will be serving up delicious food at a Japanese Preschool in Santa Ana!</div>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-80 flex flex-col items-center justify-between text-center">
          <div>
          <div className="text-brand-green text-3xl font-bold mb-2">TBD</div>
          <div className="text-brand-black text-xl font-semibold mb-1">Somewhere in OC</div>
          </div>
          <div className="text-gray-600 text-center">Most likely our final "pre-open" event before taking K-Tora Kitchen to the stars!</div>
        </div>
      </div>
      
    </div>
  )
}

export default Schedule