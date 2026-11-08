import { d174 as c0 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d174 as d174 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
