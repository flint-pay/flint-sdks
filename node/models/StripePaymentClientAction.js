import { d2349 as c0, d2350 as c1, d2351 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2349 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["StripePaymentClientAction"]:c0(),["StripePaymentIntentClientAction"]:c1(),["StripeSetupIntentClientAction"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeStripePaymentClientAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
