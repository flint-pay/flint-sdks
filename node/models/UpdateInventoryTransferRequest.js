import { d2407 as c0, d2406 as c1, d2403 as c2, d2404 as c3, d2405 as c4, d2408 as c5 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2408 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2408;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec631"]:c0(),["SharedCodec632"]:c1(),["SharedCodec633"]:c2(),["SharedCodec634"]:c3(),["SharedCodec635"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
