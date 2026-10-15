import { d1786 as c0, d1787 as c1, d1789 as c2, d1791 as c3, d1792 as c4, d1793 as c5, d1794 as c6, d1795 as c7, d1796 as c8, d323 as c9, d1823 as c10, d1824 as c11, d1834 as c12, d2178 as c13, d2179 as c14, d14 as c15, d1822 as c16, d1833 as c17, d1832 as c18 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1791 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1791;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionResponse"]:c3(),["MerchantAccountSessionStripe"]:c4(),["MerchantAccountSessionStripeAccountSession"]:c5(),["MerchantAccountSessionStripeCollectionOptions"]:c6(),["MerchantAccountSessionStripeComponent"]:c7(),["MerchantAccountSessionStripeRequirements"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["OnboardingRequirements"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec467"]:c16(),["SharedCodec469"]:c17(),["SharedCodec470"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
