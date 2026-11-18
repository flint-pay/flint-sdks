import { d335 as c0 } from '../descriptors/data/18.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d335 as d335 } from '../descriptors/data/18.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d335;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOnboardingAccessLinkRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOnboardingAccessLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
