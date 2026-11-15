import { d1002 as c0 } from '../descriptors/data/49.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7636 as c1, d7637 as c2, d7638 as c3, d7639 as c4 } from '../descriptors/data/366.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1002 as d1002 } from '../descriptors/data/49.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1002;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestClientCredentials"]:c0(),["SharedCodec1039"]:c1(),["SharedCodec1040"]:c2(),["SharedCodec1041"]:c3(),["SharedCodec1042"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestClientCredentials(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
