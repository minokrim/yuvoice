# 📰 TurtleZence - Empowering Voices Through Stories 🗣️

TurtleZence is a platform dedicated to sharing and amplifying diverse voices through compelling stories. It provides a space for individuals to submit their narratives, engage with editorial content, and connect with a global community. The platform aims to foster understanding, empathy, and meaningful dialogue by showcasing a wide range of perspectives and experiences.

🚀 **Key Features**

- **Story Submission**: Users can easily submit their stories through a user-friendly form, including options for file uploads and reCAPTCHA verification. ✍️
- **Editorial Content**: Explore curated editorial pieces covering various topics and perspectives. 🖋️
- **Global Stories**: Discover stories from around the world, filtered by category and searchable by keyword. 🌍
- **Individual Story View**: Immerse yourself in individual stories with rich content and engaging visuals. 📖
- **Landing Page**: A visually appealing landing page featuring top stories, carousels, and introductory content. 🏠
- **Responsive Design**: The platform is designed to be responsive and accessible across various devices. 📱💻
- **Dropdown Navigation**: Intuitive navigation with dropdown menus for easy access to different sections. 🧭
- **UBN - Un-Breaking News**: A dedicated section showcasing the top trending articles. 🔥

🛠️ **Tech Stack**

| Category    | Technology                | Description                                                                 |
|-------------|---------------------------|-----------------------------------------------------------------------------|
| Frontend    | React                     | JavaScript library for building user interfaces.                            |
|             | React Router DOM          | Library for handling routing and navigation in React applications.          |
|             | Tailwind CSS              | Utility-first CSS framework for styling the application.                     |
|             | react-responsive-carousel | Carousel component for displaying featured stories.                         |
|             | react-multi-carousel      | Responsive carousel component for displaying images.                          |
|             | react-icons               | Library for using icons in React applications.                              |
|             | react-google-recaptcha    | Component for implementing reCAPTCHA verification.                          |
| Backend     | EmailJS                   | Library for sending emails directly from the client-side.                    |
| Database    | WordPress REST API        | Used as a data source for fetching articles and media.                      |
| Build Tools | npm/yarn                  | Package managers for installing and managing dependencies.                  |
| Other       | Axios                     | Promise-based HTTP client for making API requests.                           |

📦 **Getting Started**

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- EmailJS account (for form submissions)
- WordPress instance with REST API enabled (for data fetching)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Configure EmailJS:

    -   Sign up for an EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/).
    -   Create a new service and template.
    -   Obtain your `service_id`, `template_id`, and `public_key`.
    -   Set these values as environment variables in your `.env` file (create one if it doesn't exist):

        ```
        REACT_APP_EMAILJS_SERVICE_ID=<your_service_id>
        REACT_APP_EMAILJS_TEMPLATE_ID=<your_template_id>
        REACT_APP_EMAILJS_PUBLIC_KEY=<your_public_key>
        ```

### Running Locally

```bash
npm start # or yarn start
```

This will start the development server. Open your browser and navigate to `http://localhost:3000` to view the application.

💻 **Project Structure**

```
📂 TurtleZence-project
├── public/
├── src/
│   ├── assets/                  # Images, icons, and other assets
│   │   ├── bg1.jpg
│   │   ├── bg2.jpg
│   │   ├── dropdown.png
│   │   ├── ...
│   ├── body/                    # Main body component
│   │   ├── body.jsx
│   │   ├── body.css
│   ├── component/               # Reusable components
│   │   ├── card.jsx
│   │   ├── carouselCard.jsx
│   │   ├── ubncard.jsx
│   ├── context/                 # React context providers
│   │   ├── responseContext.jsx
│   │   ├── storyContext.jsx
│   ├── editorial/               # Editorial content components
│   │   ├── editorialbody.jsx
│   │   ├── stories.jsx
│   │   ├── storiesnav.jsx
│   │   ├── story/
│   │   │   ├── storybody.jsx
│   │   │   ├── storycontent.jsx
│   │   ├── submitstory/
│   │   │   ├── submitstorybody.jsx
│   │   │   ├── form.jsx
│   │   ├── ubn.jsx
│   ├── footer/                   # Footer component
│   │   ├── footer.jsx
│   │   ├── footer.css
│   ├── hooks/                   # Custom React hooks
│   │   ├── useDropDown.jsx
│   ├── landingpage/             # Landing page components
│   │   ├── LandingBody.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   ├── nav/                       # Navigation component
│   │   ├── nav.jsx
│   │   ├── nav.css
│   ├── App.js                   # Main application component
│   ├── App.css
│   ├── index.js                 # Entry point of the application
│   ├── index.css
│   ├── reportWebVitals.js
├── tailwind.config.js         # Tailwind CSS configuration
├── package.json
├── README.md
```
