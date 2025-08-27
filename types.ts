
export enum Language {
    EN = 'EN',
    FR = 'FR',
    AR = 'AR',
    RU = 'RU',
}

export enum LeadStatus {
    Lead = 'Lead',
    Contacted = 'Contacted',
    Negotiation = 'Negotiation',
    Closed = 'Closed',
}

export enum UnitType {
    Studio = 'Studio',
    OneBR = '1BR',
    TwoBR = '2BR',
    ThreeBR = '3BR',
    FourBR = '4BR+',
}

export enum ListingStatus {
    Active = 'Active',
    Sold = 'Sold',
    Rented = 'Rented',
    Archived = 'Archived',
}

export enum ProjectType {
    OffPlan = 'Off-plan',
    Ready = 'Ready-to-Move',
}

export interface Agent {
    id: number;
    name: string;
    email: string;
    phone: string;
    notes: string;
}

export interface Lead {
    id: number;
    name: string;
    phone: string;
    email: string;
    language: Language;
    assignedAgent?: number;
    agentComments: string;
    aiSuggestedMessage: string;
    status: LeadStatus;
}

export interface LeadPoolLead {
    id: number;
    name: string;
    phone: string;
    email: string;
    language: Language;
}

export interface Listing {
    id: number;
    propertyName: string;
    unitType: UnitType;
    location: string;
    price: number;
    sellerApproval: boolean;
    status: ListingStatus;
}

export interface Project {
    id: number;
    projectName: string;
    developer: string;
    unitTypes: UnitType[];
    handoverDate: string;
    location: string;
    paymentPlan: string;
    priceRange: string;
    languageOfPresentation?: Language;
    aiPresentation: string;
    projectType: ProjectType;
}

export enum View {
    Dashboard = 'Dashboard',
    Leads = 'Leads',
    LeadPool = 'Lead Pool',
    Listings = 'Listings',
    Projects = 'Projects',
    Agents = 'Agents',
}
