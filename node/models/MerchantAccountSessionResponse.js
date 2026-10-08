import { d1783 as c0, d1784 as c1, d1786 as c2, d1788 as c3, d1789 as c4, d1790 as c5, d1791 as c6, d1792 as c7, d1793 as c8, d323 as c9, d1820 as c10, d1821 as c11, d1831 as c12, d2162 as c13, d2163 as c14, d14 as c15, d1819 as c16, d1830 as c17, d1829 as c18 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1788 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1788;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionResponse"]:c3(),["MerchantAccountSessionStripe"]:c4(),["MerchantAccountSessionStripeAccountSession"]:c5(),["MerchantAccountSessionStripeCollectionOptions"]:c6(),["MerchantAccountSessionStripeComponent"]:c7(),["MerchantAccountSessionStripeRequirements"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["OnboardingRequirements"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec466"]:c16(),["SharedCodec468"]:c17(),["SharedCodec469"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
