import { d761 as c0, d1753 as c1, d1754 as c2, d1755 as c3, d1756 as c4, d1757 as c5, d1787 as c6 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d761 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["EmbeddedMerchantAccountSessionExternalAction"]:c0(),["MerchantAccountSessionStripeCollectionOptions"]:c1(),["MerchantAccountSessionStripeComponentLaunch"]:c2(),["MerchantAccountSessionStripeComponentProps"]:c3(),["MerchantAccountSessionStripeLaunch"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5(),["OnboardingExternalAction"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeEmbeddedMerchantAccountSessionExternalAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
