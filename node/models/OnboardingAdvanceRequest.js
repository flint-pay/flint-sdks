import { d1010 as c0 } from '../descriptors/data/50.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8510 as c1, d8514 as c2 } from '../descriptors/data/405.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1010 as d1010 } from '../descriptors/data/50.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OnboardingAdvanceRequest"]:c0(),["OnboardingProfileRequest"]:c1(),["SharedCodec1406"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
