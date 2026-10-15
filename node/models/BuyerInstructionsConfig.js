import { d89 as c0 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d89 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d89;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerInstructionsConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
