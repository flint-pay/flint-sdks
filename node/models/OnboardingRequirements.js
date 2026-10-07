import { d1840 as c0, d1839 as c1, d1838 as c2 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1840 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1840;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingRequirements"]:c0(),["SharedCodec494"]:c1(),["SharedCodec495"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingRequirements(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
