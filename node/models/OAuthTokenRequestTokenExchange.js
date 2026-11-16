import { d1008 as c0 } from '../descriptors/data/49.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8470 as c1, d8471 as c2, d8472 as c3, d8473 as c4 } from '../descriptors/data/399.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8479 as c5 } from '../descriptors/data/400.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1008 as d1008 } from '../descriptors/data/49.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1008;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestTokenExchange"]:c0(),["SharedCodec1383"]:c1(),["SharedCodec1384"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec1392"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestTokenExchange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
