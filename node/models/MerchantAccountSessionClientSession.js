import { d1794 as c0, d1793 as c1, d1792 as c2, d1801 as c3, d1802 as c4, d1800 as c5 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1794 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1794;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionClientSession"]:c0(),["MerchantAccountSessionStripe"]:c1(),["MerchantAccountSessionStripeAccountSession"]:c2(),["MerchantAccountSessionStripeCollectionOptions"]:c3(),["MerchantAccountSessionStripeComponent"]:c4(),["MerchantAccountSessionStripeRequirements"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionClientSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
