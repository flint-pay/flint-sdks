import { d58 as c0, d784 as c1, d912 as c2, d1758 as c3, d1797 as c4, d1796 as c5, d1800 as c6, d1801 as c7, d1802 as c8, d1815 as c9, d73 as c10, d14 as c11, d1755 as c12, d1756 as c13, d1757 as c14, d1795 as c15, d2492 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1815 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OnboardingLaunchRecommendedPolicy"]:c6(),["OnboardingLaunchReference"]:c7(),["OnboardingNextStep"]:c8(),["OnboardingVerifyEmailResult"]:c9(),["PostalAddress"]:c10(),["SharedCodec1"]:c11(),["SharedCodec481"]:c12(),["SharedCodec482"]:c13(),["SharedCodec483"]:c14(),["SharedCodec485"]:c15(),["User"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
