import { d1795 as c0, d1794 as c1, d1797 as c2, d1799 as c3, d1793 as c4, d1792 as c5, d1801 as c6, d1802 as c7, d1800 as c8, d77 as c9, d1830 as c10, d1829 as c11, d1840 as c12, d2164 as c13, d2165 as c14, d14 as c15, d1828 as c16, d1839 as c17, d1838 as c18 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1799 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1799;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionResponse"]:c3(),["MerchantAccountSessionStripe"]:c4(),["MerchantAccountSessionStripeAccountSession"]:c5(),["MerchantAccountSessionStripeCollectionOptions"]:c6(),["MerchantAccountSessionStripeComponent"]:c7(),["MerchantAccountSessionStripeRequirements"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["OnboardingRequirements"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec492"]:c16(),["SharedCodec494"]:c17(),["SharedCodec495"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
