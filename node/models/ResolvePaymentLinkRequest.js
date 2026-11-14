import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7998 as c1 } from '../descriptors/data/387.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8011 as c2, d8012 as c3, d8013 as c5 } from '../descriptors/data/388.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1338 as c4 } from '../descriptors/data/64.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1338 as d1338 } from '../descriptors/data/64.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1338;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PaymentLinkResolvePrefillRequest"]:c1(),["ResolvePaymentLinkLineItemModifierRequest"]:c2(),["ResolvePaymentLinkLineItemModifiers"]:c3(),["ResolvePaymentLinkRequest"]:c4(),["ResolvePaymentLinkTextModifierRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
