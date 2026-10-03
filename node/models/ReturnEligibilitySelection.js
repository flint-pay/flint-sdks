import { d2134 as c0, d2178 as c1, d2132 as c2, d2133 as c3 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2134 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2134;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilitySelection"]:c0(),["ReturnLineItemRequest"]:c1(),["SharedCodec532"]:c2(),["SharedCodec533"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
