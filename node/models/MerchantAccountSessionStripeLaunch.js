import { d1755 as c0, d1756 as c1, d1757 as c2, d1758 as c3, d1759 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1758 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripeCollectionOptions"]:c0(),["MerchantAccountSessionStripeComponentLaunch"]:c1(),["MerchantAccountSessionStripeComponentProps"]:c2(),["MerchantAccountSessionStripeLaunch"]:c3(),["MerchantAccountSessionStripeRequirements"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripeLaunch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
