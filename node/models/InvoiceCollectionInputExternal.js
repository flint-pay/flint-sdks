import { d821 as c0 } from '../descriptors/data/42.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7293 as c1 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7190 as c2 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6241 as c4, d6242 as c5 } from '../descriptors/data/285.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d821 as d821 } from '../descriptors/data/42.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d821;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionInputExternal"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec868"]:c4(),["SharedCodec869"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionInputExternal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
