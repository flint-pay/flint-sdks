import { d58 as c0, d803 as c1, d932 as c2, d1791 as c3, d1830 as c4, d1829 as c5, d1833 as c6, d1834 as c7, d1835 as c8, d1848 as c9, d73 as c10, d14 as c11, d1788 as c12, d1789 as c13, d1790 as c14, d1828 as c15, d2525 as c16 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1848 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1848;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OnboardingLaunchRecommendedPolicy"]:c6(),["OnboardingLaunchReference"]:c7(),["OnboardingNextStep"]:c8(),["OnboardingVerifyEmailResult"]:c9(),["PostalAddress"]:c10(),["SharedCodec1"]:c11(),["SharedCodec488"]:c12(),["SharedCodec489"]:c13(),["SharedCodec490"]:c14(),["SharedCodec492"]:c15(),["User"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
