import { d6136 as c0 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c1 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6245 as c2, d6246 as c3, d6247 as c4, d6248 as c5 } from '../descriptors/data/286.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6136 as d6136 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6136;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestModel"]:c0(),["MoneyValue"]:c1(),["SharedCodec452"]:c2(),["SharedCodec453"]:c3(),["SharedCodec454"]:c4(),["SharedCodec455"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
