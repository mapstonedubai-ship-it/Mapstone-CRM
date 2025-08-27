

import { Agent, Lead, LeadPoolLead, Listing, Project, Language, LeadStatus, UnitType, ListingStatus, ProjectType } from '../types';

export const AGENTS: Agent[] = [
    { id: 1, name: 'John Doe', email: 'john.d@mapstone.com', phone: '+971 50 123 4567', notes: 'Specializes in Downtown properties.' },
    { id: 2, name: 'Jane Smith', email: 'jane.s@mapstone.com', phone: '+971 50 234 5678', notes: 'Expert in off-plan projects.' },
    { id: 3, name: 'Ahmed Khan', email: 'ahmed.k@mapstone.com', phone: '+971 50 345 6789', notes: 'Focuses on Russian-speaking clients.' },
    // FIX: Corrected a syntax error caused by a newline character within a string literal.
    { id: 4, name: 'Fatima Ali', email: 'fatima.a@mapstone.com', phone: '+971 50 456 7890', notes: 'Handles luxury villas and penthouses.' },
];

export const LEADS: Lead[] = [
    { id: 1, name: 'Alex Johnson', phone: '+1 202 555 0125', email: 'alex.j@email.com', language: Language.EN, assignedAgent: 1, agentComments: 'Interested in a 2BR apartment in Downtown.', aiSuggestedMessage: '', status: LeadStatus.Contacted },
    { id: 2, name: 'Pierre Dubois', phone: '+33 6 12 34 56 78', email: 'pierre.d@email.fr', language: Language.FR, assignedAgent: 2, agentComments: 'Looking for off-plan investment opportunities.', aiSuggestedMessage: '', status: LeadStatus.Negotiation },
    { id: 3, name: 'Omar Hassan', phone: '+20 100 123 4567', email: 'omar.h@email.eg', language: Language.AR, assignedAgent: 3, agentComments: 'Client is ready to close the deal.', aiSuggestedMessage: '', status: LeadStatus.Closed },
    { id: 4, name: 'Svetlana Petrova', phone: '+7 916 123-45-67', email: 'svetlana.p@email.ru', language: Language.RU, assignedAgent: 3, agentComments: '', aiSuggestedMessage: '', status: LeadStatus.Lead },
];

export const LEAD_POOL: LeadPoolLead[] = [
    { id: 101, name: 'Emily White', phone: '+44 20 7946 0958', email: 'emily.w@email.co.uk', language: Language.EN },
    { id: 102, name: 'Mohammed Ali', phone: '+966 50 123 4567', email: 'mohammed.a@email.sa', language: Language.AR },
    { id: 103, name: 'Ivan Kuznetsov', phone: '+7 925 987-65-43', email: 'ivan.k@email.ru', language: Language.RU },
];

export const LISTINGS: Listing[] = [
    { id: 1, propertyName: 'Burj Vista Tower 1, Apt 2501', unitType: UnitType.TwoBR, location: 'Downtown Dubai', price: 2500000, sellerApproval: true, status: ListingStatus.Active },
    { id: 2, propertyName: 'Palm Tower, Apt 4510', unitType: UnitType.OneBR, location: 'Palm Jumeirah', price: 1800000, sellerApproval: true, status: ListingStatus.Active },
    { id: 3, propertyName: 'Marina Gate 2, Apt 1805', unitType: UnitType.ThreeBR, location: 'Dubai Marina', price: 4200000, sellerApproval: false, status: ListingStatus.Active },
    { id: 4, propertyName: 'The Address BLVD, Apt 6002', unitType: UnitType.Studio, location: 'Downtown Dubai', price: 1200000, sellerApproval: true, status: ListingStatus.Sold },
    { id: 5, propertyName: 'Acacia at Park Heights', unitType: UnitType.TwoBR, location: 'Dubai Hills Estate', price: 1950000, sellerApproval: true, status: ListingStatus.Rented },
];

export const PROJECTS: Project[] = [
    { id: 1, projectName: 'Emaar Beachfront', developer: 'Emaar', unitTypes: [UnitType.OneBR, UnitType.TwoBR, UnitType.ThreeBR], handoverDate: '2025-12-31', location: 'Dubai Harbour', paymentPlan: '80/20 Payment Plan', priceRange: 'AED 2.5M - 10M', aiPresentation: '', projectType: ProjectType.OffPlan },
    { id: 2, projectName: 'Porto Montenegro', developer: 'Adriatic Marinas', unitTypes: [UnitType.Studio, UnitType.OneBR, UnitType.TwoBR], handoverDate: '2024-06-30', location: 'Montenegro', paymentPlan: 'Flexible', priceRange: 'EUR 500k - 5M', aiPresentation: '', projectType: ProjectType.Ready },
    { id: 3, projectName: 'The Valley - Eden', developer: 'Emaar', unitTypes: [UnitType.ThreeBR, UnitType.FourBR], handoverDate: '2026-03-31', location: 'Al Ain Road', paymentPlan: '70/30 Post-Handover', priceRange: 'AED 1.8M - 3M', aiPresentation: '', projectType: ProjectType.OffPlan },
];