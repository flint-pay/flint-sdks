import { d1762 as c0, d1761 as c1, d1764 as c2, d1766 as c3, d1760 as c4, d1759 as c5, d1768 as c6, d1769 as c7, d1767 as c8, d77 as c9, d1797 as c10, d1796 as c11, d1807 as c12, d2131 as c13, d2132 as c14, d14 as c15, d1795 as c16, d1806 as c17, d1805 as c18 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1766 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionResponse"]:c3(),["MerchantAccountSessionStripe"]:c4(),["MerchantAccountSessionStripeAccountSession"]:c5(),["MerchantAccountSessionStripeCollectionOptions"]:c6(),["MerchantAccountSessionStripeComponent"]:c7(),["MerchantAccountSessionStripeRequirements"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["OnboardingRequirements"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec485"]:c16(),["SharedCodec487"]:c17(),["SharedCodec488"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
