import { d2030 as c0 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2030 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2030;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentActionPaymentIntentSubject"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentActionPaymentIntentSubject(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
