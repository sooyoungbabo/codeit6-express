import * as dotenv from 'dotenv';
dotenv.config();
export const DATABASE_URL = process.env.DATABASE_URL;
export const PORT = process.env.PORT;

// export const DATABASE_URL =
//   'mongodb+srv://sooyoungbabo:tangee0907!@sooyoungbabo.kbd7hoc.mongodb.net/todo-api?retryWrites=true&w=majority&appName=sooyoungbabo';

// // 후에 환경변수 사용으로 username/password 보호
