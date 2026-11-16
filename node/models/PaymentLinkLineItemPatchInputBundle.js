import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c1 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1145 as c2 } from '../descriptors/data/56.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8042 as c3 } from '../descriptors/data/388.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8051 as c4, d8052 as c5 } from '../descriptors/data/389.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1145 as d1145 } from '../descriptors/data/56.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchInputBundle"]:c2(),["SharedCodec1192"]:c3(),["SharedCodec1201"]:c4(),["SharedCodec1202"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
