import { d797 as c0 } from '../descriptors/data/34.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d797 as d797 } from '../descriptors/data/34.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d797;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingVerifyEmailRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingVerifyEmailRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
