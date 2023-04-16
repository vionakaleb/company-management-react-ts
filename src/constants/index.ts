import { Company, Office } from 'types';

// CREATE TABLE company (id serial PRIMARY KEY, name varchar(255) NOT NULL, address varchar(255) NOT NULL, revenue integer NOT NULL, phone_code integer NOT NULL, phone_number integer NOT NULL);
// CREATE TABLE office (id serial PRIMARY KEY, name varchar(255) NOT NULL, location_latitude varchar(255) NOT NULL, location_longitude varchar(255) NOT NULL, office_start_date varchar(255) NOT NULL, company_id integer NOT NULL, FOREIGN KEY (company_id) REFERENCES company (id));

// INSERT INTO company (name, address, revenue, phone_code, phone_number) VALUES ('Gojek', 'Jakarta Selatan', 100000000000, 62, 82112345);
// INSERT INTO office (name, location_latitude, location_longitude, office_start_date, company_id) VALUES ('Pasaraya Blok M', '1232412', '-4233211', '04/18/2022', 1);

export const initialCompanyList: Company[] = [
    {
        id: '1',
        name: 'Google',
        address: '1600 Amphitheatre Parkway in Mountain View, California',
        revenue: 279800000000,
        phone: {
            code: 1,
            number: 1176554534,
        },
    },
    {
        id: '2',
        name: 'Amazon',
        address: '410 Terry Ave N, Seattle 98109, Washington',
        revenue: 514000000000,
        phone: {
            code: 12,
            number: 1265464343,
        },
    },
    {
        id: '3',
        name: 'Alibaba',
        address: '969 West Wen Yi Road Yu Hang District, Hangzhou 311121 Zhejiang Province, China',
        revenue: 109000000000,
        phone: {
            code: 13,
            number: 1345435356,
        },
    },
    {
        id: '4',
        name: 'Meta',
        address: 'Meta Seattle office at Arbor Blocks 300',
        revenue: 85960000000,
        phone: {
            code: 14,
            number: 1411232312,
        },
    },
];

export const initialOfficeList: Office[] = [
    {
        id: '1',
        name: 'Hangzhou Campus',
        location: {
            latitude: '1112321312',
            longitude: '2232312312',
        },
        officeStartDate: '28/06/2023',
        companyId: '3',
    },
    {
        id: '2',
        name: 'Hongkong Office',
        location: {
            latitude: '21121312321',
            longitude: '1223232132',
        },
        officeStartDate: '29/06/2023',
        companyId: '3',
    },
    {
        id: '3',
        name: 'Taipei Office',
        location: {
            latitude: '3222312321',
            longitude: '2333132131',
        },
        officeStartDate: '01/05/2023',
        companyId: '2',
    },
    {
        id: '4',
        name: 'U.S. Office',
        location: {
            latitude: '4222312312',
            longitude: '2444423123',
        },
        officeStartDate: '02/05/2023',
        companyId: '2',
    },
    {
        id: '5',
        name: 'U.K. Office',
        location: {
            latitude: '5333432434',
            longitude: '3555432432',
        },
        officeStartDate: '04/04/2023',
        companyId: '1',
    },
    {
        id: '6',
        name: 'Mountain View',
        location: {
            latitude: '6333432432',
            longitude: '3666423432',
        },
        officeStartDate: '05/04/2023',
        companyId: '1',
    },
    {
        id: '7',
        name: 'Canada Office',
        location: {
            latitude: '7444312321',
            longitude: '4777332132',
        },
        officeStartDate: '04/01/2023',
        companyId: '4',
    },
    {
        id: '8',
        name: 'Singapore Office',
        location: {
            latitude: '8444434324',
            longitude: '4888342545',
        },
        officeStartDate: '05/01/2023',
        companyId: '4',
    },
];
