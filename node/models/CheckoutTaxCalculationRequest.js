import { d6126 as c0 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5580 as c1 } from '../descriptors/data/243.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6126 as d6126 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxCalculationRequest"]:c0(),["SubscriptionTaxCalculationRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutTaxCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
