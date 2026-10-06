import { d1615 as c0, d1612 as c1, d1613 as c2, d1614 as c3 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1615 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1615;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingSourceRequest"]:c0(),["SharedCodec428"]:c1(),["SharedCodec429"]:c2(),["SharedCodec430"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
