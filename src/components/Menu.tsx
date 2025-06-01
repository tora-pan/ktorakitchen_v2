const Menu = () => {
  return (
    <div id="menu" className="flex flex-col items-center justify-center mt-20 overflow-x-hidden">
    <p className="uppercase text-6xl font-black font-naum">Our Menu</p>
    {/* Menu List */}
    <div className="flex flex-col items-center mt-10 w-full mb-20">
        <div className="flex flex-col gap-6 w-full max-w-2xl">
          {/* Menu Item 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <div className="text-brand-black text-xl font-semibold">Katsu Curry カツカレー</div>
              <div className="text-gray-600">Traditional Japanese fried chicken/pork on top of a bed of rice covered with a delicious homemade curry sauce.</div>
            </div>
            <div className="text-brand-green text-xl font-bold mt-2 sm:mt-0">$15</div>
          </div>
          {/* Menu Item 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <div className="text-brand-black text-xl font-semibold">Katsu Curry - the Katsu ライスカレー</div>
              <div className="text-gray-600">Not feeling the urge for meat? Try our delicious curry on top of a bed of rice.</div>
            </div>
            <div className="text-brand-green text-xl font-bold mt-2 sm:mt-0">$10</div>
          </div>
          {/* Menu Item 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <div className="text-brand-black text-xl font-semibold">Various Drinks 色んな飲み物</div>
              <div className="text-gray-600">Bottled Green Tea, Bottled Water, Cans of various sodas... We got you covered!</div>
            </div>
            <div className="text-brand-green text-xl font-bold mt-2 sm:mt-0">$2</div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <div className="text-brand-black text-xl font-semibold">Make it O-Mori 大盛り</div>
              <div className="text-gray-600">Bottled Green Tea, Bottled Water, Cans of various sodas... We got you covered!</div>
            </div>
            <div className="text-brand-green text-xl font-bold mt-2 sm:mt-0">$3</div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Menu