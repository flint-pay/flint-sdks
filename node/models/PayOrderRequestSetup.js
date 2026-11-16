import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1105 as c1 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7750 as c2, d7763 as c3, d7764 as c4, d7765 as c5 } from '../descriptors/data/372.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7780 as c6, d7781 as c7 } from '../descriptors/data/373.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1105 as d1105 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PayOrderRequestSetup"]:c1(),["PaymentSourceCredentialStripePaymentMethod"]:c2(),["SharedCodec1247"]:c3(),["SharedCodec1248"]:c4(),["SharedCodec1249"]:c5(),["SharedCodec1264"]:c6(),["SharedCodec1265"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestSetup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
