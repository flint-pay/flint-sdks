import { d793 as c0 } from '../descriptors/data/34.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4492 as c1 } from '../descriptors/data/197.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4503 as c2 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d793 as d793 } from '../descriptors/data/34.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d793;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingAdvanceRequest"]:c0(),["OnboardingProfileRequest"]:c1(),["SharedCodec964"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
