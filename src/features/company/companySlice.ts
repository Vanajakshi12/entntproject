// import { createSlice, PayloadAction } from "@reduxjs/toolkit";   
//  interface Company {
//   id: string; // A unique ID for each company (this can be auto-generated or passed on edit)
//   name: string;
//   location: string;
//   linkedinProfile: string;
//   emails: string[];
//   phoneNumbers: string[];
//   comments: string;
//   communicationPeriodicity: string; // e.g., '2 weeks', '1 month', etc.
// }
// const initialState = {
//   company: {
//     id: "",
//     name: "",
//     location: "",
//     linkedinProfile: "",
//     emails: [],
//     phoneNumbers: [],
//     comments: "",
//     communicationPeriodicity: "2 weeks",
//   },
//   companies: [
//     {
//       id: 1,
//       name: "TechCorp Solutions",
//       location: "New York, USA",
//       linkedInProfile: "https://linkedin.com/company/techcorp-solutions",
//       emails: "contact@techcorp.com",
//       phoneNumbers: "+1-555-1234",
//       comments: "Key partner in AI research.",
//       communicationPeriodicity: "2 weeks",
//     },
//     {
//       id: 2,
//       name: "GreenTech Innovations",
//       location: "Berlin, Germany",
//       linkedInProfile: "https://linkedin.com/company/greentech-innovations",
//       emails: "info@greentech.de",
//       phoneNumbers: "+49-30-9876",
//       comments: "Potential collaboration in renewable energy.",
//       communicationPeriodicity: "1 month",
//     },
//     {
//       id: 3,
//       name: "HealthFirst Corp",
//       location: "London, UK",
//       linkedInProfile: "https://linkedin.com/company/healthfirst-corp",
//       emails: "support@healthfirst.co.uk",
//       phoneNumbers: "+44-20-1122",
//       comments: "Discussing telemedicine projects.",
//       communicationPeriodicity: "3 weeks",
//     },
//     {
//       id: 4,
//       name: "FinEdge Global",
//       location: "Singapore",
//       linkedInProfile: "https://linkedin.com/company/finedge-global",
//       emails: "admin@finedge.sg",
//       phoneNumbers: "+65-1234-5678",
//       comments: "Exploring blockchain solutions.",
//       communicationPeriodicity: "Monthly",
//     },
//     {
//       id: 5,
//       name: "EduBright Systems",
//       location: "Sydney, Australia",
//       linkedInProfile: "https://linkedin.com/company/edubright-systems",
//       emails: "inquiries@edubright.au",
//       phoneNumbers: "+61-2-8765-4321",
//       comments: "E-learning initiatives for remote areas.",
//       communicationPeriodicity: "2 weeks",
//     },
//   ],
// };

//  const adminSlice = createSlice({
//   name: 'sliceName',                // Name of the slice (used in actions)
//   initialState,                     // The initial state for this slice
//   reducers: {                       // Reducer functions that modify the state
//     companiesList: (state, action:PayloadAction<Company[]>) => { // Each reducer is a function that modifies the state
//       state.companies
//     },
//   },
// });
// export const{companiesList} =adminSlice.actions;
// export const CompanyReducer=adminSlice.reducer;

// src/features/company/companySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Company {
  id: number;
  name: string;
  location: string;
  linkedInProfile: string;
  emails: string;
  phoneNumbers: string;
  comments: string;
  communicationPeriodicity: string;
}

interface CompanyState {
  companies: Company[];
  companiesCount:number;
}

const initialState: CompanyState = {
  companies:[
        {
          id: 1,
          name: "TechCorp Solutions",
          location: "New York, USA",
          linkedInProfile: "https://linkedin.com/company/techcorp-solutions",
          emails: "contact@techcorp.com",
          phoneNumbers: "+1-555-1234",
          comments: "Key partner in AI research.",
          communicationPeriodicity: "2 weeks",
        },
        {
          id: 2,
          name: "GreenTech Innovations",
          location: "Berlin, Germany",
          linkedInProfile: "https://linkedin.com/company/greentech-innovations",
          emails: "info@greentech.de",
          phoneNumbers: "+49-30-9876",
          comments: "Potential collaboration in renewable energy.",
          communicationPeriodicity: "1 month",
        },
        {
          id: 3,
          name: "HealthFirst Corp",
          location: "London, UK",
          linkedInProfile: "https://linkedin.com/company/healthfirst-corp",
          emails: "support@healthfirst.co.uk",
          phoneNumbers: "+44-20-1122",
          comments: "Discussing telemedicine projects.",
          communicationPeriodicity: "3 weeks",
        },
        {
          id: 4,
          name: "FinEdge Global",
          location: "Singapore",
          linkedInProfile: "https://linkedin.com/company/finedge-global",
          emails: "admin@finedge.sg",
          phoneNumbers: "+65-1234-5678",
          comments: "Exploring blockchain solutions.",
          communicationPeriodicity: "Monthly",
        },
        {
          id: 5,
          name: "EduBright Systems",
          location: "Sydney, Australia",
          linkedInProfile: "https://linkedin.com/company/edubright-systems",
          emails: "inquiries@edubright.au",
          phoneNumbers: "+61-2-8765-4321",
          comments: "E-learning initiatives for remote areas.",
          communicationPeriodicity: "2 weeks",
        },
      ], 
      companiesCount:5
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload); 
      state.companiesCount=state.companies.length// Adds new company to the list
    },
    editCompany: (state, action: PayloadAction<Company>) => {
      const index = state.companies.findIndex(company => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload; // Edits the company
      }
    },
    deleteCompany: (state, action: PayloadAction<number>) => {
      state.companies = state.companies.filter(company => company.id !== action.payload); // Removes the company by id
    },
    companiesList:(state,action:any)=>{
      state.companies=state.companies
    },
    companiesCount:(state,action:any)=>{
      state.companiesCount=state.companies.length
    }
  },
});

// Export the actions generated by createSlice
export const { addCompany, editCompany, deleteCompany,companiesList ,companiesCount} = companySlice.actions;

// Export the reducer for use in the store
export const companyReducer = companySlice.reducer;
