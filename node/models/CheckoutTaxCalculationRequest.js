import { d6133 as c0 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5586 as c1 } from '../descriptors/data/245.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6133 as d6133 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6133;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxCalculationRequest"]:c0(),["SubscriptionTaxCalculationRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutTaxCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
