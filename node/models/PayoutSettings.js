import { d1782 as c0, d74 as c1, d1786 as c2, d1785 as c3, d1987 as c4 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1987 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1987;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementBlockedReason"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PayoutSettings"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
