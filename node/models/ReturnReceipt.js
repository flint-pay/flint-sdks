import { d2124 as c0, d2126 as c1, d2201 as c2, d2202 as c3, d2136 as c4, d2203 as c5, d2137 as c6 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2201 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2201;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnReceipt"]:c2(),["ReturnReceiptLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["ReturnUnverifiedItem"]:c5(),["SharedCodec534"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceipt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
