import { d10 as c0, d1585 as c1, d228 as c2, d229 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1585 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1585;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustmentLine"]:c0(),["InventoryAdjustment"]:c1(),["InventorySourceSystem"]:c2(),["SharedCodec42"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
