import { d5979 as c0 } from '../descriptors/data/270.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5979 as d5979 } from '../descriptors/data/270.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5979;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
