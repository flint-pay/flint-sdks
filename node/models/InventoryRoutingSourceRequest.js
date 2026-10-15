import { d1631 as c0, d1628 as c1, d1629 as c2, d1630 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1631 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1631;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingSourceRequest"]:c0(),["SharedCodec404"]:c1(),["SharedCodec405"]:c2(),["SharedCodec406"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
