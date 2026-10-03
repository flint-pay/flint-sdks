import { d467 as c0, d2134 as c1, d2178 as c2, d2132 as c3, d2133 as c4 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d467 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d467;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["ReturnEligibilitySelection"]:c1(),["ReturnLineItemRequest"]:c2(),["SharedCodec532"]:c3(),["SharedCodec533"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityCheckRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
