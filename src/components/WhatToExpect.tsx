
const ExpectationItem = ({ title, description }:any) => (
  <div className="mb-6 text-center">
    <span className="font-bold mb-2 text-md lg:text-lg">{title}</span>
    <span className="text-gray-400 mx-2 text-md lg:text-lg">{description}</span>
  </div>
);

const WhatToExpect = () => {
  const expectations = [
    {
      title: "Industry-Leader Talks:",
      description: "Heads of world-leading companies delivering talks and sharing their expertise on-site. Academics fast-tracking you into their area of expertise, sharing its most critical advances and drawbacks."
    },
    {
      title: "Visits to companies and Universities:",
      description: "Spending half a day in the life of Google employees, Amazon Engineers, Stanford academics, investors and founders."
    },
    {
      title: "Networking opportunities:",
      description: "Like several alumni, during the fellowship you could meet your co-founder, personal mentor or earn a referral."
    },
    {
      title: "Slack community:",
      description: "Access to our main internal communication channel where you will find opportunities, referrals, job postings and a chance to dialogue with mentors, get a visa and meet your co-founder."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-8 lg:px-4">
      <h2 className="text-2xl lg:text-5xl font-bold text-center mb-8">What to Expect</h2>
      <div className="space-y-8">
        {expectations.map((item, index) => (
          <ExpectationItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default WhatToExpect;