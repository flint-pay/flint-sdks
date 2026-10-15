import { d226 as c0, d1623 as c1, d1634 as c2, d225 as c3, d224 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d226 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d226;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConsumeInventoryReservationRequest"]:c0(),["InventoryReservationProvenance"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec40"]:c3(),["SharedCodec41"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
