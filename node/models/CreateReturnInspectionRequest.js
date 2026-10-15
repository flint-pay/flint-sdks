import { d440 as c0, d2200 as c1, d2196 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d440 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionRequest"]:c0(),["ReturnInspectionLineItemRequest"]:c1(),["ReturnSourceSystem"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
