import { d1003 as c0 } from '../descriptors/data/48.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8470 as c1, d8471 as c2, d8472 as c3, d8473 as c4, d8474 as c5, d8475 as c6, d8476 as c7 } from '../descriptors/data/399.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8477 as c8, d8478 as c9, d8479 as c10 } from '../descriptors/data/400.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1003 as d1003 } from '../descriptors/data/48.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1003;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1383"]:c1(),["SharedCodec1384"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec1387"]:c5(),["SharedCodec1388"]:c6(),["SharedCodec1389"]:c7(),["SharedCodec1390"]:c8(),["SharedCodec1391"]:c9(),["SharedCodec1392"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
