import { d1770 as c0 } from '../descriptors/data/87.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10228 as c1 } from '../descriptors/data/476.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8729 as c2, d8730 as c3 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1770 as d1770 } from '../descriptors/data/87.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1770;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkLineItemModifierInputText"]:c0(),["ResolvePaymentLinkTextModifierRequest"]:c1(),["SharedCodec488"]:c2(),["SharedCodec489"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifierInputText(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
