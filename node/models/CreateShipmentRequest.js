import { d459 as c0, d2223 as c1, d457 as c2, d456 as c3, d458 as c4 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d459 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d459;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentRequest"]:c0(),["ReturnShipmentLineItemAllocation"]:c1(),["SharedCodec154"]:c2(),["SharedCodec155"]:c3(),["SharedCodec156"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
