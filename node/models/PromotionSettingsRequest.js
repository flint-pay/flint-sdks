import { d1286 as c0 } from '../descriptors/data/62.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1286 as d1286 } from '../descriptors/data/62.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
