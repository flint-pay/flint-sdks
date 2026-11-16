import { d8619 as c0, d8620 as c1 } from '../descriptors/data/424.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d177 as c2 } from '../descriptors/data/7.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d177 as d177 } from '../descriptors/data/7.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d177;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettingsRequest"]:c0(),["CheckoutSavedPaymentDetailsSettingsRequest"]:c1(),["CheckoutSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
