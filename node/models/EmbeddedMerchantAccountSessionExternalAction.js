import { d761 as c0, d1753 as c1, d1754 as c2, d1755 as c3, d1756 as c4, d1757 as c5, d1787 as c6 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d761 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["EmbeddedMerchantAccountSessionExternalAction"]:c0(),["MerchantAccountSessionStripeCollectionOptions"]:c1(),["MerchantAccountSessionStripeComponentLaunch"]:c2(),["MerchantAccountSessionStripeComponentProps"]:c3(),["MerchantAccountSessionStripeLaunch"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5(),["OnboardingExternalAction"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeEmbeddedMerchantAccountSessionExternalAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
