import { d1598 as c0, d1634 as c1, d2488 as c2, d2489 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2489 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2489;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec625"]:c2(),["UpdateInventoryCountRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
