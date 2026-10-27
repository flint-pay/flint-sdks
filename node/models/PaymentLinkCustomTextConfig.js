import { d4653 as c0 } from '../descriptors/data/207.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4653 as d4653 } from '../descriptors/data/207.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4653;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkCustomTextConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkCustomTextConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
