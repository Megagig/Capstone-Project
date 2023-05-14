const hamburger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-links');

function mobileMenu() {
  if (navMenu.classList.contains('way')) {
    navMenu.classList.remove('way');
    hamburger.classList.toggle('active');
  } else {
    navMenu.classList.add('way');
    hamburger.classList.toggle('active');
  }
}
hamburger.addEventListener('click', mobileMenu);
document.querySelectorAll('.links').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.add('way');
    hamburger.toggle('line active');
  })
);

// CREATING FEATURED SPEAKER SECTION DYNAMICALLY
// Select the speakers element using the class name

// Define an array of speaker details
const speakersDetails = [
  {
    id: 1,
    name: 'Pharm. Folashade Lawal',
    title: 'CEO, Victory Drugs Limited.',
    speakerImg: 'image/akintunde-adelana.jpg',
    about:
      'Pharm. Folash Lawal is the CEO of Victory Drugs Limited. A leading community Pharmacy in FESTAC Town, Lagos',
  },
  {
    id: 2,
    name: 'Dr. Peter Bamkole',
    title: 'Physician, Hilton-Top Hospital Ikoyi, Lagos.',
    speakerImg: 'image/alero-onosode.jpg',
    about:
      'Peter Bamkole, pioneered the Enterprise Development Centre (EDC) of the Pan-Atlantic University in January 2003, now one of the top enterprise development centers in Africa.',
  },
  {
    id: 3,
    name: 'Pharm. Bisi Bright',
    title: 'Consultant Clinical Pharmacist and Public Health Manager.',
    speakerImg: 'image/dr-ama-ikuru.jpg',
    about:
      'Pharm. (Dr) Mrs. Bisi Bright is a Consultant Clinical Pharmacist and Public Health Manager. A fellow of both the Pharmaceutical Society of Nigeria and the West African Postgraduate College of Pharmacists (WAPCP), she also holds a Masters’ in Public Health.',
  },
  {
    id: 4,
    name: 'Chidi Okoro',
    title: 'Executive Consultant of Drug and Medicines.',
    speakerImg: 'image/Simbi-wabote.jpg',
    about:
      'Chidi Okoro teaches Strategy at Lagos Business School. He is currently the Founder/Executive Consultant of Drugs and Medicaments Nigeria Limited, a retail chain/own brands dealer in the Pharmaceutical sector.',
  },
  {
    id: 5,
    name: 'Abimbola Adebakin',
    title: 'CEO, Advantage Health Africa',
    speakerImg: 'image/rose-ndong.jpg',
    about:
      'Abimbola is the Chief Executive Officer of Advantage Health Africa, an aggregator in the retail pharmacy space.',
  },
  {
    id: 6,
    name: 'Adedotun Sulaiman',
    title: 'Veteran Sports Journalist',
    speakerImg: 'image/victor-ude.jpg',
    about:
      'Mr. Adedotun Sulaiman, MFR is a veteran Management and Strategy consultant, with over 25 years’ experience. He has been the head of 15 different companies and is the Executive Chairman of Arian Capital Limited.',
  },
];

const speakers = document.querySelector('#featured-speakers');
for (let i = 0; i < speakersDetails.length; i += 1) {
  speakers.innerHTML += `
            <div class="speaker-details" id="showforth">
              <div class="talk">
                <div class="talking">
                    <div class="speaker-img">
                      <img src="${speakersDetails[i].speakerImg}" alt="Image of Speak">
                    </div>
                    <div class="keep">
                    <h2>${speakersDetails[i].name}</h2>
                    <p><em>${speakersDetails[i].title}</em></p>
                    <div class="select"></div>
                    <p>${speakersDetails[i].about}</p>
                    </div>
                </div>
              </div>
           </div>`;
}
