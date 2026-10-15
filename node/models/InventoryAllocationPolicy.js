import { d1590 as c0, d1591 as c1, d2054 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1590 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicy"]:c0(),["InventoryAllocationPolicyConfiguration"]:c1(),["PolicyLocation"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
