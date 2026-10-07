import { d58 as c0, d803 as c1, d932 as c2, d1791 as c3, d77 as c4, d1830 as c5, d1829 as c6, d1833 as c7, d1834 as c8, d1835 as c9, d1847 as c10, d1848 as c11, d73 as c12, d2164 as c13, d2165 as c14, d14 as c15, d1788 as c16, d1789 as c17, d1790 as c18, d1828 as c19, d2525 as c20 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1847 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1847;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["OnboardingLaunchRecommendedPolicy"]:c7(),["OnboardingLaunchReference"]:c8(),["OnboardingNextStep"]:c9(),["OnboardingVerifyEmailResponse"]:c10(),["OnboardingVerifyEmailResult"]:c11(),["PostalAddress"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SharedCodec1"]:c15(),["SharedCodec488"]:c16(),["SharedCodec489"]:c17(),["SharedCodec490"]:c18(),["SharedCodec492"]:c19(),["User"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
