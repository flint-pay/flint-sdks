import { d1000 as c0 } from '../descriptors/data/49.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7636 as c1, d7637 as c2, d7638 as c3, d7639 as c4, d7640 as c5, d7641 as c6, d7642 as c7 } from '../descriptors/data/366.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7643 as c8, d7644 as c9, d7645 as c10 } from '../descriptors/data/367.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1000 as d1000 } from '../descriptors/data/49.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1000;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1039"]:c1(),["SharedCodec1040"]:c2(),["SharedCodec1041"]:c3(),["SharedCodec1042"]:c4(),["SharedCodec1043"]:c5(),["SharedCodec1044"]:c6(),["SharedCodec1045"]:c7(),["SharedCodec1046"]:c8(),["SharedCodec1047"]:c9(),["SharedCodec1048"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
