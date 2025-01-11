import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

export default function Form(){
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        country: "",
        phone_number: "",
        pen_name: "",
        section: "",
        article: "",
        document: null,
        agreement: false,
      });

    const handleCaptchaChange = (value) => {
      setCaptchaVerified(!!value); 
    };

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
      
        if (type === "file") {
          const file = files[0];
      
          if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file); // Convert file to Base64
      
            reader.onload = () => {
              setFormData((prevData) => ({
                ...prevData,
                [name]: file, // Store the file object itself
                document: {
                  name: file.name,
                  base64: reader.result.split(",")[1], // Extract Base64 content
                },
              }));
            };
      
            reader.onerror = (error) => {
              console.error("Error reading file:", error);
            };
          }
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
      

      const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!captchaVerified) {
          alert("Please verify the reCAPTCHA.");
          return;
        }
    
        if (
            !formData.email ||
            !formData.first_name ||
            !formData.last_name ||
            !formData.pen_name ||
            !formData.section ||
            !formData.article ||
            (formData.agreement === false)
          ) {
            alert("Please fill out all the fields.");
            return;
          }

        const templateParams = {
          email: formData.email,
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone_number: formData.phone_number,
          country: formData.country,
          pen_name: formData.pen_name,
          section: formData.section,
          article: formData.article,
          attachment: formData.document?.base64 || "", 
        agreement: formData.agreement ? "Yes" : "No",
        };
        console.log(templateParams);

        emailjs.send(
            "service_uu2r47h", 
            "template_a2ln39q",
            templateParams,
            "8KpZLOyBq9akhLJNA"
          )
          .then(
            (response) => {
              console.log("Success!", response.status, response.text);
              alert("Form submitted successfully!");
              setFormData({
                email: "",
                first_name: "",
                last_name: "",
                country: "",
                phone_number: "",
                pen_name: "",
                section: "",
                article: "",
                document: null,
                agreement: false,
              });
            },
            (error) => {
              console.log("Failed...", error);
              alert("Failed to submit the form. Please try again.");
            }
          );
      };

    
    return <main className="flex flex-col items-center" id="form-sec">
        <form onSubmit={handleSubmit} className="flex flex-col w-2/3 gap-10">

            <section className="flex flex-col text-left text-gray-500 text-xl font-medium">
                <label htmlFor="email">Your E-mail</label>
                <input type="email" name="email" id="email" placeholder="contact@company.com" className="border border-black border-1 h-[2em]" value={formData.email} onChange={handleChange}/>
            </section>

            <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col text-left text-gray-500 text-xl font-medium">
                <label htmlFor="first_name">Fist Name</label>
                <input type="text" name="first_name" id="first_name" placeholder="Jane" className="border border-black border-1 h-[2em]" value={formData.first_name} onChange={handleChange}/>
                </div>
                <div className="flex flex-col text-left text-gray-500 text-xl font-medium"> 
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" id="last_name" placeholder="Doe" className="border border-black border-1 h-[2em]" value={formData.last_name} onChange={handleChange}/>
                </div>
                <div className="flex flex-col text-left text-gray-500 text-xl font-medium">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" placeholder="Germany" className="border border-black border-1 h-[2em]" value={formData.country} onChange={handleChange}/>
                </div>
                <div className="flex flex-col text-left text-gray-500 text-xl font-medium">
                <label htmlFor="phone_number" className="overflow-hidden">Phone Number</label>
                <input type="text" name="phone_number" id="phone_number" placeholder="+123456789" className="border border-black border-1 h-[2em]" value={formData.phone_number} onChange={handleChange}/>
                </div>
            </section>

            <section className="flex flex-col text-left text-gray-500 text-xl font-medium">
            <label htmlFor="email">Your Pen Name</label>
            <input type="text" name="pen_name" id="pen_name" placeholder="Global Citizen" className="border border-black border-1 h-[2em]" onChange={handleChange}/>
            </section>

            <section className="flex flex-col text-left text-gray-500 text-xl font-medium">
            <label for="section">Which section is the best fit for your article, story, or poem?</label>
            <select name="section" id="section" value={formData.section} onChange={handleChange}>
            <option value="Fiction">Fiction</option>
            <option value="Humanity">Humanity</option>
            <option value="Lifestyle & Relationship">Lifestyle & Relationship</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Stem Journey">Stem Journey</option>
            <option value="Work & Life">Work & Life</option>
            </select>
            </section>

            <section className="flex flex-col text-left text-gray-500 text-xl font-medium">
            <label htmlFor="article">Link to article/story/poem (PREFERABLY A GOOGLE DOC):</label>
            <input type="url" name="article" id="article" placeholder="Please ensure that there is viewing access to the document that you are providing a link to." className="border border-black border-1 h-[2em]" value={formData.article} onChange={handleChange}/>
            </section>

            {/* <section className="flex flex-col text-left text-gray-500 text-xl font-medium">
            <label htmlFor="document">Supporting Documents</label>
            <input type="file" name="document" id="document" onChange={handleChange} placeholder="Choose Files" className="h-[2em]"/>
            </section> */}

            <section className="flex flex-col">
                <h2 className="font-semibold text-gray-600 text-2xl text-center md:text-left">By submitting, I agree to have my piece edited, and to the terms and conditions of the website and the Contributor Agreement.</h2>
                <div className="flex mt-5 gap-3">
                <input type="checkbox" name="agreement" id="agreement" checked={formData.agreement} onChange={(e) => {setFormData((prevData) => ({...prevData,agreement: e.target.checked,}));}}/> 
                <p className="font-medium text-gray-600 text-lg text-left">I have read the Yuvoice Contributor Agreement.</p>
                </div>
            </section>

            <section className="flex overflow-hidden w-full">
            <ReCAPTCHA sitekey="6LfPTKwqAAAAAFWjRW92rcQfMHGPqMO1WX28-LLY"  onChange={handleCaptchaChange} className="w-[80%]"/>
            </section>

            <section className="flex items-center justify-center">
                <button type="submit" className="bg-black text-white py-4 px-10 font-bold text-lg hover:bg-purple-700 border-none">Submit</button>
            </section>
        </form>
    </main>
}