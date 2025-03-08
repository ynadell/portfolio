import React from 'react'
import './FloatingIcons.css'

const FloatingIcons = () => {
  const icons = [
    // SVG icons from public folder
    {
      type: 'custom',
      className: 'svg-icon react-icon',
      content: <img src="React_idHw4egUI__0.png" alt="React" />
    },
    {
      type: 'custom',
      className: 'svg-icon python-icon',
      content: <img src="Python Software Foundation_idixzIbrOi_2.svg" alt="Python" />
    },
    {
      type: 'custom',
      className: 'svg-icon docker-icon',
      content: <img src="Docker_ido12OLE9Y_12.svg" alt="Docker" />
    },
    {
      type: 'custom',
      className: 'svg-icon kubernetes-icon',
      content: <img src="Kubernetes_idY6ZhJ8gT_8.svg" alt="Kubernetes" />
    },
    {
      type: 'custom',
      className: 'svg-icon mongodb-icon',
      content: <img src="MongoDB_idGfqn8y6C_5.svg" alt="MongoDB" />
    },
    {
      type: 'custom',
      className: 'svg-icon nodejs-icon',
      content: <img src="Node.js_idBSZu62Vz_1.svg" alt="Node.js" />
    },
    {
      type: 'custom',
      className: 'svg-icon pytorch-icon',
      content: <img src="PyTorch_id5W5KzDd3_2.svg" alt="PyTorch" />
    },
    {
      type: 'custom',
      className: 'svg-icon django-icon',
      content: <img src="Django_iddptz9niV_0.jpeg" alt="Django" />
    },
    {
      type: 'custom',
      className: 'svg-icon gcp-icon',
      content: <img src="Google Cloud_id9949uxzA_2.svg" alt="Google Cloud" />
    },
    {
      type: 'custom',
      className: 'svg-icon typescript-icon',
      content: <img src="TypeScript_idnJINQXBu_2.svg" alt="TypeScript" />
    },
    {
      type: 'custom',
      className: 'svg-icon js-icon',
      content: <img src="javascript-icon.svg" alt="JavaScript" />
    },
    'devicon-html5-plain',
    'devicon-css3-plain',
    'devicon-git-plain',
    'devicon-cplusplus-plain',
    {
      type: 'custom',
      className: 'svg-icon angular-icon',
      content: <img src="angular.svg" alt="Angular" />
    },
    'devicon-java-plain',
    {
      type: 'custom',
      className: 'ray-icon',
      content: (
        <svg fill="none" height="44" viewBox="0 0 110 44" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.989 20.258a6.013 6.013 0 0 1 1.552-2.736 5.88 5.88 0 0 1 4.172-1.727c1.63 0 3.104.66 4.172 1.727a6.011 6.011 0 0 1 1.552 2.736h4.346a5.746 5.746 0 0 1 .66-1.592l-7.703-7.703a5.954 5.954 0 0 1-3.027.835 5.88 5.88 0 0 1-4.172-1.727 5.88 5.88 0 0 1-1.727-4.172c0-1.63.66-3.105 1.727-4.172A5.88 5.88 0 0 1 21.713 0c1.63 0 3.104.66 4.172 1.727a5.88 5.88 0 0 1 1.727 4.172 5.9 5.9 0 0 1-.835 3.027l7.703 7.703a5.954 5.954 0 0 1 3.028-.834c1.63 0 3.104.66 4.171 1.727a5.88 5.88 0 0 1 1.727 4.171 5.88 5.88 0 0 1-1.727 4.172 5.88 5.88 0 0 1-4.172 1.727 5.9 5.9 0 0 1-3.026-.834l-7.704 7.723c.524.892.835 1.92.835 3.026a5.88 5.88 0 0 1-1.727 4.172 5.88 5.88 0 0 1-4.172 1.727 5.88 5.88 0 0 1-4.172-1.727 5.88 5.88 0 0 1-1.727-4.172c0-1.63.66-3.104 1.727-4.171a5.88 5.88 0 0 1 4.172-1.727 5.9 5.9 0 0 1 3.027.834l7.703-7.703a5.746 5.746 0 0 1-.66-1.591h-4.346a6.011 6.011 0 0 1-1.552 2.736 5.88 5.88 0 0 1-4.172 1.727 5.88 5.88 0 0 1-4.172-1.727 6.013 6.013 0 0 1-1.552-2.736h-4.347a6.013 6.013 0 0 1-1.552 2.736 5.88 5.88 0 0 1-4.172 1.727 5.88 5.88 0 0 1-4.172-1.727A5.817 5.817 0 0 1 0 21.713c0-1.63.66-3.105 1.727-4.172a5.88 5.88 0 0 1 4.172-1.727c1.63 0 3.104.66 4.172 1.727a6.014 6.014 0 0 1 1.552 2.736h4.366v-.02Z" fill="#028CF0"/>
        </svg>
      )
    },
    {
      type: 'custom',
      className: 'svg-icon wandb-icon',
      content: <img src="Weights & Biases_idVbhrFlgE_1.svg" alt="Weights & Biases" />
    },
    {
      type: 'custom',
      className: 'svg-icon lightning-icon',
      content: <img src="Lightning AI ️_idKw5MUK4o_0.svg" alt="Lightning AI" />
    }
  ]

  return (
    <div className="floating-icons">
      {icons.map((icon, index) => (
        typeof icon === 'string' ? (
          <i 
            key={index} 
            className={`${icon} floating-icon`}
            style={{
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${15 + Math.random() * 15}s`,
              '--x-position': `${Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30}%`,
              '--y-position': `${Math.random() * 95}%`,
              '--move-x': `${-50 + Math.random() * 100}px`,
              '--move-y': `${-100 + Math.random() * 200}px`,
            }}
          />
        ) : (
          <span
            key={index}
            className={`floating-icon ${icon.className}`}
            style={{
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${15 + Math.random() * 15}s`,
              '--x-position': `${Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30}%`,
              '--y-position': `${Math.random() * 95}%`,
              '--move-x': `${-50 + Math.random() * 100}px`,
              '--move-y': `${-100 + Math.random() * 200}px`,
            }}
          >
            {icon.content}
          </span>
        )
      ))}
    </div>
  )
}

export default FloatingIcons 