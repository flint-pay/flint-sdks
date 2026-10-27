import { d796 as c0 } from '../descriptors/data/34.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4509 as c1 } from '../descriptors/data/198.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4520 as c2 } from '../descriptors/data/199.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d796 as d796 } from '../descriptors/data/34.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d796;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingAdvanceRequest"]:c0(),["OnboardingProfileRequest"]:c1(),["SharedCodec969"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
