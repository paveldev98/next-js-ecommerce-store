import { postgreConfig, setEnvironmentVariables } from './util/config.js';

setEnvironmentVariables();

// const option = {
//   transform: {
//     ...postgres.camel,
//     undefined: null,
//   },
// };

export default postgreConfig;
