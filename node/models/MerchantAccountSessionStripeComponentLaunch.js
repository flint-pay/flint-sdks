import { d1753 as c0, d1754 as c1, d1755 as c2, d1757 as c3 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1754 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripeCollectionOptions"]:c0(),["MerchantAccountSessionStripeComponentLaunch"]:c1(),["MerchantAccountSessionStripeComponentProps"]:c2(),["MerchantAccountSessionStripeRequirements"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripeComponentLaunch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
