import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from '@tabler/icons-react';

const dropdownData = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      'Designer', 
      'Developer', 
      'Product Manager', 
      'Marketing Specialist', 
      'Data Analyst', 
      'Sales Executive', 
      'Content Writer', 
      'Customer Support',
      'UI/UX Designer',
      'DevOps Engineer',
      'Business Analyst',
      'HR Manager',
      'Financial Analyst',
      'Project Manager',
      'Quality Assurance',
      'Technical Writer'
    ]
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      'Delhi', 
      'New York', 
      'San Francisco', 
      'London', 
      'Berlin', 
      'Tokyo', 
      'Sydney', 
      'Toronto',
      'Mumbai',
      'Bangalore',
      'Paris',
      'Dubai',
      'Singapore',
      'Hong Kong',
      'Chicago',
      'Los Angeles'
    ]
  },
  {
    title: "Experience",
    icon: IconBriefcase,
    options: [
      'Entry Level', 
      'Intermediate', 
      'Expert',
      'Internship',
      'Senior Level',
      'Executive'
    ]
  },
  {
    title: "Job Type",
    icon: IconRecharging,
    options: [
      'Full Time', 
      'Part Time', 
      'Contract', 
      'Freelance', 
      'Internship',
      'Remote',
      'Hybrid',
      'Temporary'
    ]
  }
];
const jobList = [
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
  },
  {
    jobTitle: "Software Engineer",
    company: "Google",
    applicants: 50,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "San Francisco",
    package: "45 LPA",
  },
  {
    jobTitle: "Data Scientist",
    company: "Amazon",
    applicants: 30,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Seattle",
    package: "50 LPA",
  },
  {
    jobTitle: "Marketing Specialist",
    company: "Apple",
    applicants: 20,
    experience: "Intermediate",
    jobType: "Part-Time",
    location: "Cupertino",
    package: "28 LPA",
  },
  {
    jobTitle: "UI/UX Designer",
    company: "Microsoft",
    applicants: 15,
    experience: "Entry Level",
    jobType: "Contract",
    location: "Redmond",
    package: "35 LPA",
  },
  {
    jobTitle: "DevOps Engineer",
    company: "Netflix",
    applicants: 40,
    experience: "Expert",
    jobType: "Remote",
    location: "Los Gatos",
    package: "55 LPA",
  },
  {
    jobTitle: "Business Analyst",
    company: "Uber",
    applicants: 35,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "San Francisco",
    package: "40 LPA",
  },
  {
    jobTitle: "HR Manager",
    company: "Tesla",
    applicants: 10,
    experience: "Senior Level",
    jobType: "Full-Time",
    location: "Palo Alto",
    package: "60 LPA",
  },
  {
    jobTitle: "Financial Analyst",
    company: "Goldman Sachs",
    applicants: 45,
    experience: "Expert",
    jobType: "Full-Time",
    location: "New York",
    package: "65 LPA",
  },
  {
    jobTitle: "Project Manager",
    company: "IBM",
    applicants: 22,
    experience: "Intermediate",
    jobType: "Hybrid",
    location: "Austin",
    package: "48 LPA",
  }
];