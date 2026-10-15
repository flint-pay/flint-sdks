import { d2081 as c0 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2081 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2081;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionCodesSummary"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodesSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
