import React from "react";
import "./Services.css";
const data = [
  {
    id: 1,
    image: "/compus-img/gym-min-ppa72edxh68revc8tuukkanh9mfia63wl8l9edmmdg.png",
    name: "GYMNASIUM",
    detail:
      "The university focuses on the health of its students as well and thus has a well-equipped gym within the campus. Both, boys and girls has a defined time to access the gym as per their comfort and ,availability.",
  },
  {
    id: 2,
    image:
      "./compus-img/bank-min-ppa729oqj02bstj2latfptu6ap2o7ol8wlbtzztl8k.png",
    name: "BANKING FACILITY",
    detail:
      "The campus has a full-fledged branch of Punjab National Bank with 24X7 ATM facility. The bank offers zero balance savings bank accounts and educational loan facility to the students.",
  },
  {
    id: 3,
    image:
      "/compus-img/bbdu-library-q9zae21de44wp3v0geszlzpmn9h0l3m01sc0vg3078.jpg",
    name: "UNIVERSITY LIBRARY",
    detail:
      "Rich & well-stocked Central & School Libraries with more than 36,000 Books, Periodicals and Journals in print as well as in electronic form with online subscription of EBSCO DOSS, EBSCO MANAGEMENT, J-GATE, SCC ONLINE, DELNET, ENVENTI etc.",
  },
  {
    id: 4,
    image:
      "/compus-img/sports-min-ppa72w8v30x7jgmaxkkhdo58jxzhcf2szozhimw538.png",
    name: "SPORTS FACILITIES",
    detail:
      "Dr. Akhilesh Das Gupta sports stadium in the campus has a capacity to accommodate more than 20,000 spectators. The stadium is extensively used for outdoor games like Cricket, Football & Hockey and Athletics.",
  },
  {
    id: 5,
    image:
      "/compus-img/hostel-min-2-ppa7kfwenoxw9f4sh5lrx8qzqvi510qfejds0kvkxw.png",
    name: "HOSTELS",
    detail:
      "Hostel facility for 2000+ Boys and 1000+ Girls respectively is available in the Campus. The Hostel accommodation is on twin / triple sharing basis. Each Hostel has a Recreation Room with TV & Indoor Games facility.",
  },
  {
    id: 6,
    image:
      "/compus-img/mall-min-ppa7k5k6kijqppjt5j4vntcx7mx3ocldp47fqjawuc.png",
    name: "MALL & CAFETERIA",
    detail:
      "The Student’s Mall is a beautifdiv double storied, sloped roof building, surrounded by lush green lawns housing Food Court, Stationery & Book Shop, Salon, Dispensary and Branded Outfit.",
  },
];

const Services = () => {
  return (
    <div className="compus">
      <div className="compus-data">
        <h1>Campus Infrastructure</h1>
      </div>
      <div className="compus-list">
        {data.map((data) => (
          <div key={data.id}>
            <div className="list-item">
              <img src={data.image} alt="data_img" />
              <h1>{data.name}</h1>
              <p>{data.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
