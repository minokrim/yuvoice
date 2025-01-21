// import img from "../assets/image 20.png";
// export function WithUs() {
//   return (
//     <div className="flex justify-between p-16 border bg-purple-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg"> 
      
//         <h1 className="text-4xl text-left  font-bold text-gray-800 mb-4">Volunteer with Us</h1>
//         <p className="text-lg text-left text-gray-700">At Yuvoice, we’re not just a platform—we’re a movement. Whether you're passionate about social justice, tech innovation, or uplifting marginalized voices, we need YOU to help build the world's largest pro-democracy platform.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 float-left">Volunteer</button>
             
//       </div> 
//       <div>
//           <img src={img} alt="volunteer" className="w-full"/>
//       </div> 
      
//     </div>
    
//   );
// } 

import img from "../assets/image 20.png";

export function WithUs() {
  return (
    <div className="flex justify-center items-center py-8 bg-purple-100">
      <div className="flex flex-col lg:flex-row items-center bg-white px-6 lg:p-10 rounded-lg shadow-xl w-full max-w-7xl">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-left">
            Volunteer with Us
          </h1>
          <p className="text-gray-700 text-lg mb-6 text-left">
            At Yuvoice, we’re not just a platform—we’re a movement. Whether
            you're passionate about social justice, tech innovation, or
            uplifting marginalized voices, we need YOU to help build the
            world's largest pro-democracy platform.
          </p>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 float-left">
            Volunteer
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={img}
            alt="A global volunteering movement illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}


