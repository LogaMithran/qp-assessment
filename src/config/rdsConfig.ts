require('dotenv').config();
export const RdsConfig = {
    read: {
        port: process.env.MYSQL_PORT,
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    },
    write: {
        port: process.env.MYSQL_PORT,
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
}

// mysql://avnadmin:AVNS_SiqRBw7rIxnwPHf_GSy@qp-assessment-qp-assesment.h.aivencloud.com:14525/defaultdb?ssl-mode=REQUIRED

// write: {
//     port: 14525,
//         host: "qp-assessment-qp-assesment.h.aivencloud.com",
//         username: "avnadmin",
//         password: "AVNS_SiqRBw7rIxnwPHf_GSy",
//         database: "defaultdb"
// }