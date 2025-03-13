

const Home = () => {
  return (
    <main>
      <header className="relative w-full h-[500px]">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-5xl font-medium pb-4">Expert Care, Every Step of the Way.</h1>
          <button
            className="px-5 py-2 text-lg font-semibold text-black bg-white rounded-full hover:bg-blue-500 hover:text-white transition duration-500">
            Book Appointment</button>
        </div>
      </header>
      <section className="p-10">
        <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellat sequi
          voluptatibus culpa nisi voluptate explicabo obcaecati ipsam earum dolore qui labore possimus repellendus
          reiciendis totam quia illo itaque esse enim, asperiores libero. Aut sunt esse asperiores tenetur unde
          impedit cum, quasi vero amet reiciendis eius modi praesentium, at architecto.</p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
        </ul>
      </section>
      <section className="p-10">
        <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellat sequi
          voluptatibus culpa nisi voluptate explicabo obcaecati ipsam earum dolore qui labore possimus repellendus
          reiciendis totam quia illo itaque esse enim, asperiores libero. Aut sunt esse asperiores tenetur unde
          impedit cum, quasi vero amet reiciendis eius modi praesentium, at architecto.</p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
          <li className="text-gray-800">Lorem ipsum dolor sit amet.</li>
        </ul>
      </section>
    </main>
  )
};

export default Home;
