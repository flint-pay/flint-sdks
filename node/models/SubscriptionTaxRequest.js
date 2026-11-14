import { d8738 as c0, d8739 as c1, d8753 as c2 } from '../descriptors/data/431.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8753 as d8753 } from '../descriptors/data/431.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8753;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1630"]:c0(),["SharedCodec1631"]:c1(),["SubscriptionTaxRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
