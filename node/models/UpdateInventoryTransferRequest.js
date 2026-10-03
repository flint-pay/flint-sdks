import { d2404 as c0, d2403 as c1, d2400 as c2, d2401 as c3, d2402 as c4, d2405 as c5 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2405 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec631"]:c0(),["SharedCodec632"]:c1(),["SharedCodec633"]:c2(),["SharedCodec634"]:c3(),["SharedCodec635"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
