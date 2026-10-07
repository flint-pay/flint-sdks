import { d1795 as c0, d1794 as c1, d1797 as c2, d1793 as c3, d1792 as c4, d1801 as c5, d1802 as c6, d1800 as c7, d1840 as c8, d1839 as c9, d1838 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1795 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1795;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionStripe"]:c3(),["MerchantAccountSessionStripeAccountSession"]:c4(),["MerchantAccountSessionStripeCollectionOptions"]:c5(),["MerchantAccountSessionStripeComponent"]:c6(),["MerchantAccountSessionStripeRequirements"]:c7(),["OnboardingRequirements"]:c8(),["SharedCodec494"]:c9(),["SharedCodec495"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
