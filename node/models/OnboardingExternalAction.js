import { d1753 as c0, d1754 as c1, d1755 as c2, d1756 as c3, d1757 as c4, d1787 as c5 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1787 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripeCollectionOptions"]:c0(),["MerchantAccountSessionStripeComponentLaunch"]:c1(),["MerchantAccountSessionStripeComponentProps"]:c2(),["MerchantAccountSessionStripeLaunch"]:c3(),["MerchantAccountSessionStripeRequirements"]:c4(),["OnboardingExternalAction"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingExternalAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
