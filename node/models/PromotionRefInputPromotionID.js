import { d5836 as c0 } from '../descriptors/data/257.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5836 as d5836 } from '../descriptors/data/257.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5836;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefInputPromotionID"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefInputPromotionID(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
