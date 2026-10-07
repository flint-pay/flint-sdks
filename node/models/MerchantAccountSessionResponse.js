import { d1738 as c0, d1739 as c1, d1741 as c2, d1743 as c3, d1744 as c4, d1745 as c5, d1746 as c6, d1747 as c7, d1748 as c8, d314 as c9, d1775 as c10, d1776 as c11, d1786 as c12, d2112 as c13, d2113 as c14, d14 as c15, d1774 as c16, d1785 as c17, d1784 as c18 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1743 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSession"]:c0(),["MerchantAccountSessionClientSession"]:c1(),["MerchantAccountSessionEffectivePolicy"]:c2(),["MerchantAccountSessionResponse"]:c3(),["MerchantAccountSessionStripe"]:c4(),["MerchantAccountSessionStripeAccountSession"]:c5(),["MerchantAccountSessionStripeCollectionOptions"]:c6(),["MerchantAccountSessionStripeComponent"]:c7(),["MerchantAccountSessionStripeRequirements"]:c8(),["MoneyValue"]:c9(),["NextAction"]:c10(),["NextActionMerchantAccountSession"]:c11(),["OnboardingRequirements"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec448"]:c16(),["SharedCodec450"]:c17(),["SharedCodec451"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
