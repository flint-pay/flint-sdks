import { d58 as c0, d784 as c1, d912 as c2, d1758 as c3, d77 as c4, d1797 as c5, d1796 as c6, d1800 as c7, d1801 as c8, d1802 as c9, d1814 as c10, d1815 as c11, d73 as c12, d2131 as c13, d2132 as c14, d14 as c15, d1755 as c16, d1756 as c17, d1757 as c18, d1795 as c19, d2492 as c20 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1814 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1814;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["OnboardingLaunchRecommendedPolicy"]:c7(),["OnboardingLaunchReference"]:c8(),["OnboardingNextStep"]:c9(),["OnboardingVerifyEmailResponse"]:c10(),["OnboardingVerifyEmailResult"]:c11(),["PostalAddress"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec481"]:c16(),["SharedCodec482"]:c17(),["SharedCodec483"]:c18(),["SharedCodec485"]:c19(),["User"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
