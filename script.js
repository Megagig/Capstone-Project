const hamburger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-links');

const mobileMenu = () => {
  navMenu.classList.toggle('way');
  hamburger.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);

document.querySelectorAll('.links').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('way');
    hamburger.classList.remove('active');
  });
});

// CREATING FEATURED SPEAKER SECTION DYNAMICALLY
// Select the speakers element using the class name

// Define an array of speaker details

const speakersDetails = [
  {
    id: 1,
    name: 'Mr Akintunde Adelana',
    title: 'Director, Monitoring and Evaluation, NCDMB',
    speakerImg: 'image/akintunde-adelana.jpg',
    about:
      'Mr Akintunde Adelana is the Director, Monitoring and Evaluation, NCDMB. He is featured in many peer-reviewed journals.',
  },
  {
    id: 2,
    name: 'Alero Onosode',
    title: 'Chairperson - Diversity Sectoral Working Group',
    speakerImg: 'image/alero-onosode.jpg',
    about:
      'The chairman of the Nigerian Content Consultative Forum. Astute member of the Nigerian Society of Engineers.',
  },
  {
    id: 3,
    name: 'Dr Ama Ikuru',
    title: 'Ag. Director, Capacity Building, NCDMB',
    speakerImg: 'image/dr-ama-ikuru.jpg',
    about:
      'Dr Ama Ikuru is the Ag. Director, Capacity Building, NCDMB. A fellow of the Nigerian Society of Engineers. He also holds a Masters in Aeronautics.',
  },
  {
    id: 4,
    name: 'Engr. Simbi Wabote',
    title: 'Executive Secretary, NCDMB',
    speakerImg: 'image/Simbi-wabote.jpg',
    about:
      'Engr. Simbi Wabote teaches Strategy at Lagos Business School. He is currently the Founder/Executive IT Hub, Ikeja, Nigeria.',
  },
  {
    id: 5,
    name: 'Rose Ndong',
    title: 'Executive Commissioner ICT, NCC',
    speakerImg: 'image/rose-ndong.jpg',
    about:
      'Rose Ndong is Executive Commissioner - Exploration & Acreage Management, DPR.',
  },
  {
    id: 6,
    name: 'Victor Udeh',
    title: 'Managing Director, Arian Capital Limited',
    speakerImg: 'image/victor-ude.jpg',
    about:
      'Victor Udeh, MFR is a veteran Management and Strategy consultant, with over 25 years’ experience. He has been the head of 15 different companies and is the Executive Chairman of Arian Capital Limited.',
  },
];

const speakersContainer = document.querySelector('#new-comers');
speakersDetails.forEach((speaker) => {
  const speakerDetails = `
      <div class="speaker-details" id="showforth">
        <div class="talk">
          <div class="talking">
            <div class="speaker-img">
              <img src="${speaker.speakerImg}" alt="Image of Speaker">
            </div>
            <div class="keep">
              <h2>${speaker.name}</h2>
              <p><em>${speaker.title}</em></p>
              <div class="select"></div>
              <p>${speaker.about}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  speakersContainer.innerHTML += speakerDetails;
});
