import { d8658 as c0 } from '../descriptors/data/381.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8658 as d8658 } from '../descriptors/data/381.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8658;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WeightRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWeightRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
