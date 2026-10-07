import { d54 as c0, d744 as c1, d868 as c2, d1737 as c3, d1752 as c4, d1753 as c5, d314 as c6, d1775 as c7, d1776 as c8, d1779 as c9, d1780 as c10, d1781 as c11, d1793 as c12, d1794 as c13, d66 as c14, d2112 as c15, d2113 as c16, d14 as c17, d1736 as c18, d1774 as c19, d2470 as c20 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1793 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1793;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantReadinessAxis"]:c4(),["MerchantReadinessRequirements"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["OnboardingLaunchRecommendedPolicy"]:c9(),["OnboardingLaunchReference"]:c10(),["OnboardingNextStep"]:c11(),["OnboardingVerifyEmailResponse"]:c12(),["OnboardingVerifyEmailResult"]:c13(),["PostalAddress"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec446"]:c18(),["SharedCodec448"]:c19(),["User"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
