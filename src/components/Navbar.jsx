import Logo from '../assets/dd.png'

function Navbar() {
  return (
    <div className='flex flex-row justify-between mt-8'>
      {/* Navbar Start */}
      <div className='flex flex-row'>
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div className="flex flex-row gap-10">
          <h2>LandWind</h2>
          <h1>Company</h1>
          <h1>Marketplace</h1>
          <h1>Features</h1>
          <h1>Team</h1>
          <h1>Contact</h1>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="cursor-pointer">Log in</h1>
        <button className='p-2 text-white bg-purple-600 rounded-lg'>Get Started</button>
      </div>
      {/* Navbar End */}
    </div>
  );
}

function MainContent() {
  return (
    <main className="p-8 mt-16">
      {/* Section 1 */}
      <div className="text-left">
        <div className="text-3xl font-bold">Building digital</div>
        <div className="text-3xl font-bold"> products & brands.</div>
        <p className="mt-4 text-base">
          Here at Flowbite, we focus on markets where technology, innovation, and
          </p>
          <p className="mt-4 text-base">capital can unlock long-term value and drive economic growth.
        </p>
        
        <div className="mt-4">
            <button className="px-4 py-2 mr-4 text-white bg-purple-600 rounded">Start 30 Day Free Trial</button>
            <button className="px-4 py-2 text-black bg-gray-300 rounded">Pricing & FAQ</button>
          </div>
          
          <div className="absolute right-0 top-20">
          <img src="src/assets/ssc.png" alt="SSC" className="w-auto h-50"/>
        </div>
        
        
      </div>

      {/* Section 2 */}
      <div className="mt-40">
        
        <div className="flex items-center justify-center gap-x-20">
          <img src="src/assets/Google.png" alt="Google" />
          <img src="src/assets/Microsoft.png" alt="Microsoft" />
          <img src="src/assets/Spotify (1).png" alt="Spotify" />
          <img src="src/assets/Mailchimp.png" alt="Mailchimp" />
          <img src="src/assets/Airbnb.png" alt="Airbnb" />
        </div>
      </div>

      
    </main>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
