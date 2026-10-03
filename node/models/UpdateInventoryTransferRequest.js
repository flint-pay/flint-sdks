import { d2405 as c0, d2404 as c1, d2401 as c2, d2402 as c3, d2403 as c4, d2406 as c5 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2406 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec631"]:c0(),["SharedCodec632"]:c1(),["SharedCodec633"]:c2(),["SharedCodec634"]:c3(),["SharedCodec635"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
