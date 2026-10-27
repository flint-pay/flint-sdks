import { d4774 as c0 } from '../descriptors/data/215.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4774 as d4774 } from '../descriptors/data/215.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4774;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionSchedulePatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionSchedulePatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
