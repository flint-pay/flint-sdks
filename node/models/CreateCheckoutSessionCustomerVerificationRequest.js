import { d206 as c0 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5978 as c1, d5979 as c2, d5981 as c3, d5982 as c4, d5985 as c5 } from '../descriptors/data/270.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5988 as c6, d5989 as c7 } from '../descriptors/data/271.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d206 as d206 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d206;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionCustomerVerificationRequest"]:c0(),["CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest"]:c1(),["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c2(),["SharedCodec189"]:c3(),["SharedCodec190"]:c4(),["SharedCodec191"]:c5(),["SharedCodec192"]:c6(),["SharedCodec193"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
