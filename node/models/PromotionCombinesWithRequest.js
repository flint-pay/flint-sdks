import { d8213 as c0 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8213 as d8213 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionCombinesWithRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCombinesWithRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
