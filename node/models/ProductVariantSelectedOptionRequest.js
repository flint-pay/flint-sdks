import { d8115 as c0 } from '../descriptors/data/391.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8115 as d8115 } from '../descriptors/data/391.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8115;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ProductVariantSelectedOptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantSelectedOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
