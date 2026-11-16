import { d6143 as c0 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6143 as d6143 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6143;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefInputPromotionID"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefInputPromotionID(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
