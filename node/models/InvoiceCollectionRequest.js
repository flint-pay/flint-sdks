import { d7184 as c0, d7190 as c2 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7293 as c1 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6241 as c4, d6242 as c5 } from '../descriptors/data/285.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7223 as c6, d7224 as c7, d7225 as c8, d7226 as c9, d7227 as c10, d7228 as c11, d7229 as c12 } from '../descriptors/data/340.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7184 as d7184 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec868"]:c4(),["SharedCodec869"]:c5(),["SharedCodec875"]:c6(),["SharedCodec876"]:c7(),["SharedCodec877"]:c8(),["SharedCodec878"]:c9(),["SharedCodec879"]:c10(),["SharedCodec880"]:c11(),["SharedCodec881"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
