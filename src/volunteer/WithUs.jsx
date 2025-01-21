import img from "../assets/p1.jpg";
export function WithUs() {
  return (
    <div className="flex justify-between p-16 border bg-fuchsia-950">
     <div> 
      <h1>Volunteer with Us</h1>
      <p>At Yuvoice, we’re not just a platform—we’re a movement. Whether you're passionate about social justice, tech innovation, or uplifting marginalized voices, we need YOU to help build the world's largest pro-democracy platform.
      </p>
      <button>Volunteer</button>
        </div> 
        
        <div>
            <img src={img} alt="volunteer" className="w-full"/>
        </div>
    </div>
    
  );
} 