import { d426 as c0, d77 as c1, d1882 as c2, d1883 as c3 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d426 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderPaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["OrderPaymentSourceCardSelection"]:c2(),["OrderPaymentSourceSelection"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
