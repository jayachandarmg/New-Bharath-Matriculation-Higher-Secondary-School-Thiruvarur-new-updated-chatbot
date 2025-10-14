// ---------- School Info Data ----------
const schoolName = "New Bharath Matriculation Higher Secondary School";
const schoolContact = "📞 Phone: 8925055554 | 📧 Email: newbharathschool@gmail.com";
const schoolPrincipal = "👨‍🏫 Principal: Dr. N.Muralidharan";
const schoolLocation = "📍 New Street, Thiruvarur Main Road, Tamil Nadu";
const schoolMedium = "📝 Medium: English Medium";
const schoolTimings = "🕒 9:00 AM – 4:20 PM";
const cctv = "📹 Approximately 80 - 90";
const classrooms = "🏫 Totally 59+ class rooms in our school";
const schoolblocks = "🏫 There are three blocks in our school - A,B and C";
const schoolBreaks = "🍱 Lunch Break: 12:20 PM – 1:10 PM<br>📢 Prayer: 9:15 AM – 9:30 AM";
const schoolWebsite = "🌍 Visit our website: https://newbharathschool.org/";

const viceprincipal = "1. Kamala.R, 2. Vijayalakshmi.N, 3. Bhuvaneshwari.S";

const schooluniform = [
  "Uniform: From Pre.K.G. to V Std",
  "Boys",
  "SHIRT: Red and Mustard Colour with horizontal Stripes",
  "HALF PANT: Mustard Colour, BELT: Mustard Colour & Red Stripes, Navy Blue Socks & Black leather shoes",
  "GIRLS",
  "SHIRT: Red and Mustard Colour with horizontal Stripes",
  "SKIRT: Mustard Colour, BELT: Red Mustard Colour Stripes, Navy Blue Socks & Black leather shoes & Black ribbon",
  "Uniform: From VI Std to X Std",
  "BOYS",
  "SHIRT: Checked Green, PANT: Dark Green",
  "COAT: Pista Green, Black shoes & Navy Blue Socks",
  "GIRLS",
  "TOPS: Checked Green, BOTTOM PANT: Dark Green",
  "COAT: Pista Green, Black cut shoes & Navy Blue Socks & Black ribbon",
  "Uniform: From XI Std to XII Std",
  "BOYS",
  "SHIRT: Blue & White Checked, PANT: Blue, Black shoes & Navy Blue Socks, Blue belt & Blue tie with white stripes",
  "GIRLS",
  "TOPS: Blue & White Checked, BOTTOM PANT: Blue, Blue Shawl, Black cut shoes & Navy Blue socks, Black Ribbon",
  "Pre K.G to XII Std",
  "Every Monday Scout & Guide dress"
];

const studentrules = [
  "RULES & REGULATIONS FOR STUDENTS",
  "1. Students should come in full uniform with Id card",
  "2. Follow discipline, Neatness and Honesty.",
  "3. Obey the rules and regulation of school; if violated, students should accept the action taken by the school management.",
  "4. Std X, XI, XII students must attend the coaching classes morning and evening conducted by the school.",
  "5. No private tuition allowed for Std X, XI, XII students.",
  "6. Must obey and respect all.",
  "7. Follow the regulations given by the school from time to time during school recess / break hours.",
  "8. Students are responsible to bring the books and other study materials as per the timetable schedule.",
  "9. Students use only guide or reference books for all subjects given by school.",
  "10. No mobile phones allowed. Must avoid using mobile phones.",
  "11. Should always move in proper order when leaving the class.",
  "12. Students are responsible for keeping their things carefully.",
  "13. Students are not allowed to drive two-wheelers in uniform or any other dress.",
  "14. Students should not indulge in mal-practise or copying during examinations. Must follow examination code / rules."
];

const admissionDocs = [
  "📄 Birth Certificate",
  "📄 Transfer Certificate (if applicable)",
  "📄 Community Certificate",
  "📄 Aadhar Card",
  "📸 Passport Size Photos"
];

const holidayDetails = `
📅 School Holidays:<br>
- Sundays: Weekly holiday<br>
- Government-declared public holidays<br>
- Summer vacation: May<br>
- Quarterly holidays: September<br>
- Half-yearly holidays: December<br>
- Annual holidays: April<br>
`;

const fees = {
  LKG: "₹16,000 / year",
  UKG: "₹20,000 / year",
  I: "₹24,000 / year",
  II: "₹28,000 / year",
  III: "₹32,000 / year",
  IV: "₹36,000 / year",
  V: "₹40,000 / year",
  VI: "₹44,000 / year",
  VII: "₹48,000 / year",
  VIII: "₹52,000 / year",
  IX: "₹56,000 / year",
  X: "₹60,000 / year",
  XI: "₹64,000 / year",
  XII: "₹68,000 / year"
};

const groups11 = [
  "📘 Group 1: Tamil, English, Maths, Physics, Chemistry, Biology",
  "💻 Group 2: Tamil, English, Maths, Physics, Chemistry, Computer Science",
  "📊 Group 3: Tamil, English, Commerce, Accountancy, Economics, Computer Application",
  "🖥 Group 4: Tamil, English, Maths, Automobile Theory, Automobile Practical, Employability Skills"
];

const sslcToppers = [
  "1st Rank – 495/500",
  "2nd Rank – 490/500",
  "3rd Rank – 485/500"
];

const hscToppers = [
  "1st Rank – 562/600",
  "2nd Rank – 559/600",
  "3rd Rank – 532/600"
];

// ---------- Teachers Data ----------
const teachers = {
  physics: ["Ram Prabhu.B (PG Asst)", "Saravana Tamilan.S (PG Asst)", "Hariprasath.M (PG Asst)", "Durga.S (PG Asst)"],
  chemistry: ["Kamala.R (V.P)", "Kumaravelu.P (PG Asst)", "Elakya.K (PG Asst)"],
  maths: ["Kavitha.V (PG Asst)", "Vijayakumar.R (PG Asst)", "Saravanatamilan.S (PG Asst)"],
  biology: ["Rajadhurai.A (Coordinator)", "Kowsalya.M (PG Asst)"],
  computer: ["Malarvizhi.N (PG Asst)", "Eniya.M.L (PG Asst)", "Shanmathi.K (PG Asst)"],
  tamil: ["Ranjithkumar.R (PG Asst)", "Anitha.S (PG Asst)"],
  english: ["Palanisamy.A (PG Asst)", "Bhuvaneshwari.S (V.P)", "Saranya.V.S (PG Asst)"],
  accounts: ["Jagadish.S (PG Asst)"],
  eas_ca: ["Shanmathy.K (PG Asst)"],
  automobile: ["Ram Prabhu.B (PG Asst)", "Hari Prasath.M (PG Asst)"],
  economics: ["Vijayalakshmi.N (V.P)"],
  commerce: ["Jagadish.S (PG Asst)"]
};

const allTeachers = Object.values(teachers).flat();

// ---------- Facilities ----------
const sportsFacilities = ["⚽ Football", "🏏 Cricket", "🏀 Basketball", "🏃 Athletics", "🏐 Volleyball"];
const waterFacilities = "💧 Pure RO drinking water in all blocks.";
const cycleStand = "🚲 Safe cycle stand available.";
const auditorium = "🎭 Small auditorium for events.";
const canteen = "🍴 No canteen facility available.";
const library = "📚 Library with 100+ books.";
const toilet = "🚽 Yes, we have toilets for both boys and girls.";
const physicslab = "Our Physics lab is equipped with modern instruments to help students explore the laws of nature through hands-on experiments.";
const chemistrylab = "The Chemistry lab provides a safe and well-equipped environment for students to conduct experiments and learn chemical reactions practically.";
const biologylab = "In our Biology lab, students study living organisms and life processes using microscopes, models, and other scientific tools.";

// ---------- Helper Functions ----------
function isGreeting(text) {
  return /\b(?:hi|hii|hello|hey|hey there|hi there|hello bot|hi bot|hey bot|good morning|good afternoon|good evening)\b/i.test(text);
}

function makeBold(text) {
  return `<b>${text}</b>`;
}

// ---------- Bot Reply Logic ----------
function getBotReply(rawText) {
  const text = rawText.toLowerCase().trim();

  // Greetings
  if (isGreeting(text)) {
    const greetings = [
      "👋 Hello! How can I help you?",
      "🤖 Hi there! What would you like to know today?",
      "🎓 Hello! Ask me about admissions, teachers, fees, facilities, or holidays!"
    ];
    return makeBold(greetings[Math.floor(Math.random() * greetings.length)]);
  }

  // Thank you replies
  if (/\b(thank you|thanks|thank u|thankuh|thankuu|thankyou)\b/i.test(text)) {
    const replies = [
      "😊 You're most welcome!",
      "🙏 Thank you too! Happy to help!",
      "🤗 Glad I could help you!",
      "💫 Always here to assist you!"
    ];
    return makeBold(replies[Math.floor(Math.random() * replies.length)]);
  }

  // Help message
  if (text.includes("help") || text.includes("what can") || text.includes("options")) {
    return makeBold("💡 I can help with: Admissions, Fees, Timings, Groups, Toppers, Teachers, Facilities, Bus info, and Contact details.");
  }

  // Admissions
  if (text.includes("admission") || text.includes("apply") || text.includes("join")) {
    return makeBold(`📚 Admission Info:<br>- ${admissionDocs.join("<br>- ")}<br><br>${schoolContact}`);
  }

  // Fees
  if (text.includes("fee") || text.includes("fees") || text.includes("payment")) {
    return makeBold("💰 Fees per class:<br>" + Object.entries(fees).map(([cls, f]) => `Class ${cls}: ${f}`).join("<br>"));
  }

  if (text.includes("time") || text.includes("timing") || text.includes("hours")) {
    return makeBold(schoolTimings);
  }

  if (text.includes("contact") || text.includes("phone") || text.includes("email")) {
    return makeBold(schoolContact);
  }

  // Vice Principal reply first
  if (text.includes("vice principal") || text.includes("v.p")) {
    return makeBold(`👨‍💼 Vice Principals:<br>${viceprincipal}`);
  }

  // Principal reply
  if (text.includes("principal")) {
    return makeBold(schoolPrincipal);
  }

  // Other queries
  if (text.includes("classrooms") || text.includes("hall")) return makeBold(classrooms);
  if (text.includes("blocks") || text.includes("building")) return makeBold(schoolblocks);
  if (text.includes("school name") || text.includes("name of the school")) return makeBold(schoolName);
  if (text.includes("location") || text.includes("address")) return makeBold(schoolLocation);
  if (text.includes("security camera") || text.includes("cctv")) return makeBold(cctv);
  if (text.includes("medium") || text.includes("language")) return makeBold(schoolMedium);
  if (text.includes("11") && text.includes("group")) return makeBold("📖 11th Standard Groups:<br>" + groups11.join("<br>"));
  if (text.includes("sslc") || text.includes("10th")) return makeBold("🏆 Last year SSLC Toppers:<br>" + sslcToppers.join("<br>"));
  if (text.includes("hsc") || text.includes("12th")) return makeBold("🏆 Last year HSC Toppers:<br>" + hscToppers.join("<br>"));

  // Teachers
  if (text.includes("teacher") || text.includes("staff")) {
    for (const [subject, list] of Object.entries(teachers)) {
      if (text.includes(subject)) {
        return makeBold(`👩‍🏫 ${subject.toUpperCase()} Teachers:<br>${list.join("<br>")}`);
      }
    }

    const foundTeacher = allTeachers.find(t => text.includes(t.split(" ")[0].toLowerCase()));
    if (foundTeacher) {
      return makeBold(`👩‍🏫 ${foundTeacher} is one of our respected staff members.`);
    }

    return makeBold(`👩‍🏫 Teachers List:<br>
Physics:<br>${teachers.physics.join("<br>")}<br><br>
Chemistry:<br>${teachers.chemistry.join("<br>")}<br><br>
Maths:<br>${teachers.maths.join("<br>")}<br><br>
Biology:<br>${teachers.biology.join("<br>")}<br><br>
Computer Science:<br>${teachers.computer.join("<br>")}<br><br>
Tamil:<br>${teachers.tamil.join("<br>")}<br><br>
English:<br>${teachers.english.join("<br>")}<br><br>
Accounts:<br>${teachers.accounts.join("<br>")}<br><br>
Economics:<br>${teachers.economics.join("<br>")}<br><br>
Commerce:<br>${teachers.commerce.join("<br>")}<br><br>
Automobile:<br>${teachers.automobile.join("<br>")}<br><br>
EAS & CA:<br>${teachers.eas_ca.join("<br>")}`);
  }

  // Facilities
  if (text.includes("facility") || text.includes("facilities")) {
    return makeBold(`🏫 School Facilities:<br>
⚽ Sports:<br>${sportsFacilities.join("<br>")}<br><br>
💧 Water:<br>${waterFacilities}<br><br>
🚲 Cycle Stand:<br>${cycleStand}<br><br>
🎭 Auditorium:<br>${auditorium}<br><br>
🍴 Canteen:<br>${canteen}<br><br>
🚽 Toilet:<br>${toilet}<br><br>
Physics lab:<br>${physicslab}<br><br>
Chemistry lab:<br>${chemistrylab}<br><br>
Biology lab:<br>${biologylab}<br><br>
📚 Library:<br>${library}`);
  }

  if (text.includes("bus") || text.includes("transport") || text.includes("van")) return makeBold("🚌 Sorry, no bus facility is available.");
  if (text.includes("competition") || text.includes("contest") || text.includes("event")) return makeBold("🏆 We conduct inter-house & inter-school competitions in academics, sports & cultural events.");
  if (text.includes("holiday") || text.includes("leave") || text.includes("vacation") || text.includes("festival")) return makeBold(holidayDetails);
  if (text.includes("colour") || text.includes("uniform")) return makeBold(schooluniform.join("<br>"));
  if (text.includes("student") || text.includes("rules")) return makeBold(studentrules.join("<br>"));
  if (text.includes("break") || text.includes("lunch") || text.includes("assembly")) return makeBold(schoolBreaks);
  if (text.includes("website") || text.includes("link")) return makeBold(schoolWebsite);

  // Default fallback
  return makeBold("🤔 Sorry, I didn’t understand. Try asking about teachers, admissions, fees, timings, or facilities.");
}

// ---------- Chat UI ----------
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  // User message
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user-message");
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);
  userMsg.style.animation = "fadeSlideIn 0.5s forwards";

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
  input.focus();

  // Bot typing effect
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot-message");
  botMsg.textContent = "🤖 Bot is typing...";
  chatBox.appendChild(botMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    botMsg.innerHTML = getBotReply(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

// ---------- Splash Screen & Welcome Message ----------
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const chatContainer = document.getElementById("chat-container");

  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.display = "none";
      chatContainer.style.display = "flex";

      // Welcome message
      const chatBox = document.getElementById("chat-box");
      const welcome = [
        "👋 Hello! I’m your assistant from New Bharath Matriculation Higher Secondary School.<br>How can I help you?",
        "🎓 Welcome! Ask me about admissions, teachers, fees, facilities, and more!"
      ];
      const botMsg = document.createElement("div");
      botMsg.classList.add("message", "bot-message");
      botMsg.innerHTML = makeBold(welcome[Math.floor(Math.random() * welcome.length)]);
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
  }, 1500);
});

// ---------- Send on Enter Key ----------
document.getElementById('user-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') sendMessage();
});
