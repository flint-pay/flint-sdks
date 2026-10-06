import { d2419 as c0, d2418 as c1, d2415 as c2, d2416 as c3, d2417 as c4, d2420 as c5 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2420 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec643"]:c0(),["SharedCodec644"]:c1(),["SharedCodec645"]:c2(),["SharedCodec646"]:c3(),["SharedCodec647"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
