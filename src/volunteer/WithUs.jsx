import img from "../assets/p1.jpg";
export function WithUs() {
  return (
    <div className="flex justify-between p-16 border bg-purple-100">
     <div className="bg-white p-8 rounded-lg shadow-lg"> 
      <h1 className="text-4xl text-left  font-bold text-gray-800 mb-4">Volunteer with Us</h1>
      <p className="text-lg text-left text-gray-700">At Yuvoice, we’re not just a platform—we’re a movement. Whether you're passionate about social justice, tech innovation, or uplifting marginalized voices, we need YOU to help build the world's largest pro-democracy platform.
      </p>
      <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 float-left">Volunteer</button>
        </div> 
        
        <div>
            <img src={img} alt="volunteer" className="w-full"/>
        </div>
    </div>
    
  );
} 