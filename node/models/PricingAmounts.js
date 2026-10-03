import { d74 as c0, d1996 as c1 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1996 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1996;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PricingAmounts"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePricingAmounts(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
