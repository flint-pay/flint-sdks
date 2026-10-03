import { d763 as c0, d1755 as c1, d1756 as c2, d1757 as c3, d1758 as c4, d1759 as c5, d1789 as c6 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d763 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d763;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["EmbeddedMerchantAccountSessionExternalAction"]:c0(),["MerchantAccountSessionStripeCollectionOptions"]:c1(),["MerchantAccountSessionStripeComponentLaunch"]:c2(),["MerchantAccountSessionStripeComponentProps"]:c3(),["MerchantAccountSessionStripeLaunch"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5(),["OnboardingExternalAction"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeEmbeddedMerchantAccountSessionExternalAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
