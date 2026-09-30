import { d1650 as c0, d1651 as c1, d1652 as c2, d1653 as c3, d1657 as c4, d1661 as c5, d1647 as c6, d1656 as c7, d1655 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1661 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1661;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingLaunchRecommendedPolicy"]:c0(),["OnboardingLaunchReference"]:c1(),["OnboardingNextStep"]:c2(),["OnboardingProfile"]:c3(),["OnboardingRequirements"]:c4(),["OnboardingState"]:c5(),["SharedCodec438"]:c6(),["SharedCodec439"]:c7(),["SharedCodec440"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingState(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
