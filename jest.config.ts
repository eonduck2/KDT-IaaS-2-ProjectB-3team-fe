// module.exports = {
//   transform: {
//     "^.+\\.tsx?$": "babel-jest",
//   },
//   testEnvironment: "node", // 또는 "jsdom", 환경에 따라 설정
// };

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: [
    "**/__test__/**/*.(spec|test).[tj]s?(x)",
    // "**/?(*.)+(spec|test).[tj]s?(x)"  // 모든 .spec.js, .test.js, .spec.ts, .test.ts 파일
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
