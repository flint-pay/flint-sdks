import { d107 as c0 } from '../descriptors/data/4.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4644 as c1, d4645 as c2, d4646 as c3, d4647 as c4 } from '../descriptors/data/206.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d107 as d107 } from '../descriptors/data/4.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d107;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["SharedCodec53"]:c1(),["SharedCodec54"]:c2(),["SharedCodec55"]:c3(),["SharedCodec56"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
