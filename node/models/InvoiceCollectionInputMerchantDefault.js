import { d822 as c0 } from '../descriptors/data/42.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7293 as c1 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7190 as c2 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6242 as c4 } from '../descriptors/data/285.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7225 as c5 } from '../descriptors/data/340.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d822 as d822 } from '../descriptors/data/42.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d822;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionInputMerchantDefault"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec869"]:c4(),["SharedCodec877"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionInputMerchantDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
