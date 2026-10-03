import { d2407 as c0, d2406 as c1, d2403 as c2, d2404 as c3, d2405 as c4, d2408 as c5 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2408 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2408;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec631"]:c0(),["SharedCodec632"]:c1(),["SharedCodec633"]:c2(),["SharedCodec634"]:c3(),["SharedCodec635"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
