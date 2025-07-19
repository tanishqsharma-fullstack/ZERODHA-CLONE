import React, { useState } from "react";

const team = [
  {
    name: "Nithin Kamath",
    role: "Founder, CEO",
    img: "media/nithinKamath.jpg",
    bio: [
      "Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade‑long stint as a trader.",
      "Today, Zerodha has changed the landscape of the Indian broking industry.",
      "He is a member of the SEBI SMAC and MDAC committees.",
      "Playing basketball is his zen.",
    ],
    alwaysVisible: true,
  },
  {
    name: "Nikhil Kamath",
    role: "Co‑founder",
    img: "media/Nikhil.jpg",
    bio: ["Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."],
  },
  {
    name: "Dr. Kailash Nadh",
    role: "CTO",
    img: "media/Kailash.jpg",
    bio: ["Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."],
  },
    {
    name: "Venu Madhav",
    role: "COO",
    img: "media/Venu.jpg",
    bio: ["Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."],
  },
  {
    name: "Hanan Delvi",
    role: "CCO",
    img: "media/Hanan.jpg",
    bio: ["We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."],
  },
  {
    name: "Seema Patil",
    role: "Director",
    img: "media/Seema.jpg",
    bio: ["Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."],
  },
   {
    name: "Karthik Rangappa",
    role: "Chief of Education",
    img: "media/Karthik.jpg",
    bio: ["Karthik 'Guru' Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."],
  },
  {
    name: "Austin Prakesh",
    role: "Director Strategy",
    img: "media/Austin.jpg",
    bio: ["Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."],
  },
  

];

export default function Team() {
  const [active, setActive] = useState(null);
  const toggle = (i) => setActive(active === i ? null : i);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 border-bottom pb-3">People</h2>

      {team[0] && (
        <div className="row align-items-center mb-5">
          <div className="col-md-3 text-center">
            <img
              src={team[0].img}
              alt={team[0].name}
              className="rounded-circle img-fluid"
              style={{ width: "120px", height: "120px", objectFit: "cover", border: "2px solid #ccc" }}
            />
            <h5 className="fw-bold mt-3 mb-1">{team[0].name}</h5>
            <p className="text-muted">{team[0].role}</p>
          </div>
          <div className="col-md-9 text-muted">
            {team[0].bio.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      )}

      <div className="row">
        {team.slice(1).map((m, i) => (
          <div key={i} className="col-md-4 mb-5">
            <div className="text-center">
              <img
                src={m.img}
                alt={m.name}
                className="rounded-circle img-fluid"
                style={{ width: "120px", height: "120px", objectFit: "cover", border: "2px solid #ccc" }}
              />
              <h5 className="fw-bold mt-3 mb-1">{m.name}</h5>
              <p className="text-muted">{m.role}</p>
              <button className="btn btn-outline-primary btn-sm mt-2" onClick={() => toggle(i + 1)}>
                {active === i + 1 ? "Hide Bio" : "View Bio"}
              </button>
              {active === i + 1 && (
                <div className="mt-3 text-muted text-start">
                  {m.bio.map((line, idx2) => (
                    <p key={idx2}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
