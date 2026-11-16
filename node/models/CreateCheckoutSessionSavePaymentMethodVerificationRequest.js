import { d214 as c0 } from '../descriptors/data/10.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d214 as d214 } from '../descriptors/data/10.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d214;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionSavePaymentMethodVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSavePaymentMethodVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
