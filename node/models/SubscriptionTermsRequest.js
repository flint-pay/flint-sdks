import { d6120 as c0, d6121 as c1 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8740 as c2, d8741 as c3, d8750 as c4 } from '../descriptors/data/431.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6132 as c5 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8754 as c6 } from '../descriptors/data/432.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8754 as d8754 } from '../descriptors/data/432.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec145"]:c0(),["SharedCodec146"]:c1(),["SharedCodec1632"]:c2(),["SharedCodec1633"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionPlanChangeLineItemRequest"]:c5(),["SubscriptionTermsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
