import { d1004 as c0 } from '../descriptors/data/49.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8470 as c1, d8471 as c2, d8472 as c3, d8473 as c4 } from '../descriptors/data/402.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1004 as d1004 } from '../descriptors/data/49.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1004;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestAuthorizationCode"]:c0(),["SharedCodec1383"]:c1(),["SharedCodec1384"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestAuthorizationCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
