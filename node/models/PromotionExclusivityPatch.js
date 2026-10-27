import { d4765 as c0 } from '../descriptors/data/214.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4765 as d4765 } from '../descriptors/data/214.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionExclusivityPatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionExclusivityPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
