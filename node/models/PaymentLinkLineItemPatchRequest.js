import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c1 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8016 as c2 } from '../descriptors/data/386.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8042 as c3 } from '../descriptors/data/388.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8047 as c4, d8048 as c5, d8050 as c6, d8051 as c7, d8052 as c8, d8053 as c9, d8054 as c10, d8055 as c11, d8056 as c12 } from '../descriptors/data/389.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8057 as c13, d8058 as c14 } from '../descriptors/data/390.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8016 as d8016 } from '../descriptors/data/386.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8016;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1192"]:c3(),["SharedCodec1197"]:c4(),["SharedCodec1198"]:c5(),["SharedCodec1200"]:c6(),["SharedCodec1201"]:c7(),["SharedCodec1202"]:c8(),["SharedCodec1203"]:c9(),["SharedCodec1204"]:c10(),["SharedCodec1205"]:c11(),["SharedCodec1206"]:c12(),["SharedCodec1207"]:c13(),["SharedCodec1208"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
