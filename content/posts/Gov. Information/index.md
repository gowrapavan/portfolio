---
title: "Confidential Certificates"
date: 2024-09-13T10:00:00+06:00
description: "Download Highly confidential certificates of Gowra Pavan Kumar."
menu:
  sidebar:
    name: "Confidential Certificates"
    identifier: "conf-certificates"
    weight: 10
tags: ["Certificates", "Downloads"]
categories: ["Achievements", "Downloads"]
---

<div id="overlay" class="overlay">
  <div class="form-container">
    <form class="form" id="loginForm"> 
      <span id="login-label">Authentication</span> 
      <div class="input-row">
        <label for="dob" class="form-label">Date of Birth</label>
        <input class="input" id="dob" type="text" placeholder="dd/mm/yyyy" maxlength="10">
      </div>
      <div class="input-row">
        <label for="password" class="form-label">Password</label>
        <input class="input" id="password" type="password" placeholder="Password" minlength="8" maxlength="15">
      </div>
      <button type="button" id="btn" class="cssbuttons-io-button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        Access
      </button> 
      <div id="error-message" style="display:none; color:red; text-align:center;">Incorrect password or Date of Birth!</div>
    </form>
  </div>
</div>



<script>
  document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById('dob');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('btn');
    const errorMessage = document.getElementById('error-message');
    const overlay = document.getElementById('overlay');
    const correctPassword = "iampavan";
    const correctDob = "01/05/2004"; // Ensure format matches your placeholder

    // Handle input formatting
    dateInput.addEventListener('input', function(event) {
      const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
      let formattedValue = '';

      if (value.length > 0) {
        formattedValue += value.substring(0, 2);
      }
      if (value.length > 2) {
        formattedValue += '/' + value.substring(2, 4);
      }
      if (value.length > 4) {
        formattedValue += '/' + value.substring(4, 8);
      }

      event.target.value = formattedValue;
      setCursorPosition(event.target, formattedValue.length);
    });

    // Set cursor position based on the length of the input
    function setCursorPosition(input, pos) {
      setTimeout(() => {
        input.setSelectionRange(pos, pos);
      }, 0);
    }

    // Authentication on button click
    submitButton.addEventListener('click', function() {
      const password = passwordInput.value;
      const dob = dateInput.value;

      if (password === correctPassword && dob === correctDob) {
        overlay.style.display = 'none';
      } else {
        errorMessage.style.display = 'block';
      }
    });
  });
</script>

<style>
  /* Ensure background content remains accessible */
  body {
    overflow: auto;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center; /* Center the form vertically */
    backdrop-filter: blur(8px);
    z-index: 9999; /* Ensure the form is on top */
  }

  /* Form container */
  .form-container {
    width: 350px;
    background-color: rgba(232, 232, 232, 0.95);
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .form-label {
    color : black;
  }

  /* Label styling */
  #login-label {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #4d36d0;
  }

  /* Input fields styling */
  .input-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }

  .input {
    padding: 0.6rem;
    border: none;
    border-radius: 8px;
    box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px rgba(0, 0, 0, 0.2);
    color: black; /* Change text color to black */
    background-color: #f0f0f0; /* Optional: Set a light background for better contrast */

  }

  .cssbuttons-io-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8em 1.5em;
    font-size: 17px;
    font-weight: 500;
    color: white;
    background: linear-gradient(144deg, #4d36d0, #8426ff 50%, #006db0);
    border-radius: 20em;
    cursor: pointer;
    margin-top: 1rem;
  }

  .cssbuttons-io-button svg {
    margin-right: 8px;
  }

  .cssbuttons-io-button:hover {
    box-shadow: 0 0.7em 2em -0.2em rgba(77, 54, 208, 0.8);
    transform: scale(1.05); /* Optional: Slight zoom effect */
  }



  /* Mobile Styles */
  @media (max-width: 600px) {
    .form-container {
      width: 90%;
      padding: 15px;
    }

    .input {
      padding: 0.8rem;
    }

    .cssbuttons-io-button {
      padding: 0.7em 1.2em;
      font-size: 15px;
    }
  }
</style>



![Profile Image](gowra.jpeg)  
# Gowra Pavan Kumar
**Location**: Guntur, Andhra Pradesh, India  
**Email**: gowrapavankumar2004@gmail.com  
**Phone**: 9642027908  
**LinkedIn**: [in/gowra-pavan-kumar-154250302](https://www.linkedin.com/in/gowra-pavan-kumar-154250302)  
**Portfolio**: [gowra.netlify.app](https://gowra.netlify.app)

---

## ABOUT
I am Gowra Pavan Kumar, a dedicated and enthusiastic software engineering student with a deep passion for technology and programming. My journey into tech began with a fascination for coding, and I have since developed strong proficiency in several programming languages and technologies.

---

## PROJECTS

### Hugo Blog and Mobile Application  
**Personal Project** • [gowra.netlify.app](https://gowra.netlify.app) • March 2024 - June 2024  
Developed and deployed a blog using Hugo and created a corresponding mobile application using Cordova to enhance user engagement.

---

## ACADEMICS

**Bachelor of Technology**  
*Kallam Haranadhareddy Institute of Technology* • Guntur, India • 2021 - 2025 • **7.2 CGPA**

**Intermediate (MPC)**  
*Narayana Junior College* • Guntur, Andhra Pradesh, India • 2019 - 2021 • **7.8 CGPA**

**Central Board of Secondary Education**  
*Dr. Kondabolu Lakshmi Prasad Public School* • Guntur, Andhra Pradesh, India • 2019 • **6.5 CGPA**

---

## Download Government Identity Documents

Below you can download the important government identity documents of Gowra Pavan Kumar. Click on the document names to download the corresponding PDFs.

<div class="document-row">
  <span class="document-name">Aadhar Card</span>
  <a href="../demo/AADHAR.pdf" download>
    <button class="cssbuttons-io-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
      </svg>
      <span>Download</span>
    </button>
  </a>
  <p class="document-content">The Aadhar Card serves as a primary identification document in India.</p>
  <p class="document-content">It includes a unique identification number issued by the UIDAI.</p>
  <p class="document-content">The card is used for various purposes including verification of identity.</p>
</div>

<div class="document-row">
  <span class="document-name">PAN Card</span>
  <a href="../demo/PAN.pdf" download>
    <button class="cssbuttons-io-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
      </svg>
      <span>Download</span>
    </button>
  </a>
  <p class="document-content">The PAN Card is a vital document for tax purposes in India.</p>
  <p class="document-content">It helps in tracking financial transactions and tax payments.</p>
  <p class="document-content">This card is issued by the Income Tax Department of India.</p>
</div>

<div class="document-row">
  <span class="document-name">10th Certificate</span>
  The 10th Certificate was awarded by the Central Board of Secondary Education, reflecting the completion of secondary education at Dr. Kondabolu Lakshmi Prasad Public School, JKC College Rd, Navabharath Nagar, Guntur, Andhra Pradesh, India, in the year 2019, with a score of 6.5.<br>
  
  <p class="document-content">The 10th Certificate is essential for verifying completion of secondary education.</p>
  <p class="document-content">It contains details of subjects and overall performance.</p>
  <p class="document-content">This certificate is often required for further educational admissions.</p>

  <a href="../demo/10TH_CERTIFICATE.pdf" download>
    <button class="cssbuttons-io-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
      </svg>
      <span>Download</span>
    </button>
  </a>
</div>

<div class="document-row">
  <span class="document-name">Intermediate Certificate</span>
  <p class="document-content">The Intermediate Certificate represents the completion of higher secondary education at Narayana Junior College, Guntur, Andhra Pradesh, India, in the stream of MPC   (Mathematics, Physics, Chemistry), completed in the year 2021, with a score of 7.8.</p>
  <p class="document-content">The Intermediate Certificate signifies the completion of higher secondary education.</p>
  <p class="document-content">It details the academic stream and the marks obtained.</p>
  <p class="document-content">Required for entry into undergraduate programs.</p>

  <a href="../demo/INTERMEDIATE_CERTIFICATE.pdf" download>
    <button class="cssbuttons-io-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
      </svg>
      <span>Download</span>
    </button>
  </a><br>
</div>

<div class="document-row">
  <span class="document-name">Voter Card</span>
  <p class="document-content">The Voter Card is a key identification document for voting purposes.</p>
  <p class="document-content">It includes voter details and address information.</p>
  <p class="document-content">Essential for participating in electoral processes.</p>
  
  <a href="../demo/VOTER_CARD.pdf" download>
    <button class="cssbuttons-io-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
      </svg>
      <span>Download</span>
    </button>
  </a>
</div>

<div class="document-row">
  <span class="document-name">Driving License</span>
  <a href="../demo/DRIVING_LICENSE.pdf" download>
    <button class="cssbuttons-io-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
      </svg>
      <span>Download</span>
    </button>
  </a>
  <p class="document-content">The Driving License serves as a permit to legally drive vehicles.</p>
  <p class="document-content">It includes personal details and driving qualifications.</p>
  <p class="document-content">Essential for operating vehicles and as a proof of identity.</p>
</div>

<div class="document-row">
  <span class="document-name">Birth Certificate</span>
  <a href="../demo/BIRTH_CERTIFICATE.pdf" download>
    <button class="cssbuttons-io-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
      </svg>
      <span>Download</span>
    </button>
  </a>
  <p class="document-content">The Birth Certificate is an official document verifying birth details.</p>
  <p class="document-content">It includes name, date of birth, and parent information.</p>
  <p class="document-content">Essential for identity verification and legal purposes.</p>
</div>

<div class="document-row">
  <span class="document-name">Graduation Certificate</span>
  <a href="../demo/GRADUATION_CERTIFICATE.pdf" download>
    <button class="cssbuttons-io-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
      </svg>
      <span>Download</span>
    </button>
  </a>
  <p class="document-content">The Graduation Certificate marks the completion of a degree program.</p>
  <p class="document-content">It includes details of the degree, institution, and graduation date.</p>
  <p class="document-content">Vital for career advancement and further education.</p>
</div>

<style>
  .document-row {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    color : #fff;
  }

  .document-name {
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 10px;
  }

  .document-content {
    color: #666;
    margin: 5px 0;
  }

  .cssbuttons-io-button {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 14px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    justify-content: center; /* Centering content horizontally */
  }
strong {
  color : white;
}
  .cssbuttons-io-button svg {
    margin-right: 8px;
  }

  .cssbuttons-io-button:hover {
    background-color: #0056b3;
  }

  @media (prefers-color-scheme: dark) {
    .document-row {
      background-color: #333;
      color: #ddd;
    }

    .document-name {
      color: #fff;
    }

    .document-content {
      color: #aaa;
    }

    .cssbuttons-io-button {
      background-color: #0056b3;
    }

    .cssbuttons-io-button:hover {
      background-color: #004080;
    }
  }
  
  /* Default light mode styling */
p span {
  color: #333; /* Dark color for light mode */
}

/* Dark mode styling */
@media (prefers-color-scheme: dark) {
  p span {
    color: #fff; /* Light color for dark mode */
  }
}



</style>