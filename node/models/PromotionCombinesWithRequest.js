import { d4764 as c0 } from '../descriptors/data/214.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4764 as d4764 } from '../descriptors/data/214.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionCombinesWithRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCombinesWithRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
