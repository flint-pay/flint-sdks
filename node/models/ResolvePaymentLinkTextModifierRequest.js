import { d4680 as c0 } from '../descriptors/data/208.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4680 as d4680 } from '../descriptors/data/208.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkTextModifierRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkTextModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
