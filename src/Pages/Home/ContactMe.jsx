const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      firstName: event.target['first-name'].value,
      lastName: event.target['last-name'].value,
      email: event.target['email'].value,
      phoneNumber: event.target['phone-number'].value,
      topic: event.target['choose-topic'].value,
      message: event.target['message'].value,
    };
  
    try {
      const response = await fetch('https://lk-resume.netlify.app/.netlify/functions/send-email', {
        method: 'POST',  // Make sure you're using POST method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        console.error('Error:', result);
        alert('Error submitting the form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please try again later.');
    }
  };  