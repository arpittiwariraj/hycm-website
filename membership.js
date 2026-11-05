document.getElementById('membership-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
      const gender = document.querySelector('input[name="Gender"]:checked').value;
      const state = document.getElementById('state').value;
      const city = document.getElementById('city').value;
      const policeStation = document.getElementById('police-station').value;
      const membershipFee = document.getElementById('membership-fee').value;

      const message = `New Membership Application:

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Gender: ${gender}
State: ${state}
City: ${city}
Nearest Police Station: ${policeStation}
Membership Fee: ${membershipFee}`;

      const whatsappUrl = `https://wa.me/919454271204?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
    });