import { d2331 as c0, d2330 as c1 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2331 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["StripePaymentClientAction"]:c0(),["StripeSetupIntentClientAction"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeStripePaymentClientAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
