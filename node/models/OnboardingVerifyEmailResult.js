import { d54 as c0, d744 as c1, d868 as c2, d1737 as c3, d1752 as c4, d1753 as c5, d1775 as c6, d1776 as c7, d1779 as c8, d1780 as c9, d1781 as c10, d1794 as c11, d66 as c12, d14 as c13, d1736 as c14, d1774 as c15, d2470 as c16 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1794 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1794;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantReadinessAxis"]:c4(),["MerchantReadinessRequirements"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["OnboardingLaunchRecommendedPolicy"]:c8(),["OnboardingLaunchReference"]:c9(),["OnboardingNextStep"]:c10(),["OnboardingVerifyEmailResult"]:c11(),["PostalAddress"]:c12(),["SharedCodec1"]:c13(),["SharedCodec446"]:c14(),["SharedCodec448"]:c15(),["User"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
