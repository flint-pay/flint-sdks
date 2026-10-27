import { d4668 as c0 } from '../descriptors/data/208.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4668 as d4668 } from '../descriptors/data/208.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4668;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkThemeConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkThemeConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
