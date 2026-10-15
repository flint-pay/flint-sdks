import { d230 as c0, d1595 as c1, d1596 as c2, d1600 as c3, d1603 as c4, d1607 as c5, d228 as c6, d229 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1600 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1600;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResult"]:c3(),["InventoryItem"]:c4(),["InventoryLevel"]:c5(),["InventorySourceSystem"]:c6(),["SharedCodec42"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
