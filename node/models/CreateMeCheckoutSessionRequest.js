import { d6118 as c0, d6115 as c2, d6116 as c3, d6117 as c4 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d282 as c1 } from '../descriptors/data/15.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7427 as c5, d7428 as c6, d7429 as c7, d7430 as c8, d7431 as c9 } from '../descriptors/data/355.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d282 as d282 } from '../descriptors/data/15.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec194"]:c2(),["SharedCodec195"]:c3(),["SharedCodec196"]:c4(),["SharedCodec311"]:c5(),["SharedCodec312"]:c6(),["SharedCodec313"]:c7(),["SharedCodec314"]:c8(),["SharedCodec315"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
