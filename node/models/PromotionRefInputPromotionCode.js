import { d5213 as c0 } from '../descriptors/data/232.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5213 as d5213 } from '../descriptors/data/232.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefInputPromotionCode"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefInputPromotionCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
