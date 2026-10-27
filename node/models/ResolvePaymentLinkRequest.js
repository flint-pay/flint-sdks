import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4678 as c1, d4679 as c2, d4680 as c4 } from '../descriptors/data/208.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d905 as c3 } from '../descriptors/data/39.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d905 as d905 } from '../descriptors/data/39.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d905;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ResolvePaymentLinkLineItemModifierRequest"]:c1(),["ResolvePaymentLinkLineItemModifiers"]:c2(),["ResolvePaymentLinkRequest"]:c3(),["ResolvePaymentLinkTextModifierRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
