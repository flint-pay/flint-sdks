import { d5978 as c0, d5979 as c1 } from '../descriptors/data/270.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d216 as c2 } from '../descriptors/data/10.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d216 as d216 } from '../descriptors/data/10.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d216;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest"]:c0(),["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c1(),["CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
