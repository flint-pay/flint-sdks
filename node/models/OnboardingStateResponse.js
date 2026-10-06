import { d77 as c0, d1823 as c1, d1822 as c2, d1826 as c3, d1827 as c4, d1828 as c5, d1829 as c6, d1833 as c7, d1837 as c8, d1838 as c9, d2157 as c10, d2158 as c11, d14 as c12, d1821 as c13, d1824 as c14, d1832 as c15, d1831 as c16 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1838 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1838;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OnboardingLaunchRecommendedPolicy"]:c3(),["OnboardingLaunchReference"]:c4(),["OnboardingNextStep"]:c5(),["OnboardingProfile"]:c6(),["OnboardingRequirements"]:c7(),["OnboardingState"]:c8(),["OnboardingStateResponse"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec1"]:c12(),["SharedCodec487"]:c13(),["SharedCodec488"]:c14(),["SharedCodec489"]:c15(),["SharedCodec490"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingStateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
