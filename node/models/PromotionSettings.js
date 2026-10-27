import { d5083 as c0 } from '../descriptors/data/233.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5083 as d5083 } from '../descriptors/data/233.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5083;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionSettings"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
