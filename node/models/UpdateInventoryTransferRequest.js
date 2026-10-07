import { d2446 as c0, d2445 as c1, d2442 as c2, d2443 as c3, d2444 as c4, d2447 as c5 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2447 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec646"]:c0(),["SharedCodec647"]:c1(),["SharedCodec648"]:c2(),["SharedCodec649"]:c3(),["SharedCodec650"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
