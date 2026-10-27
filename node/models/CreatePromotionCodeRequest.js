import { d4736 as c0 } from '../descriptors/data/212.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4736 as d4736 } from '../descriptors/data/212.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4736;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionCodeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
