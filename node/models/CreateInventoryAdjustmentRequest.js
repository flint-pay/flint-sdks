import { d348 as c0, d1586 as c1, d1634 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d348 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
