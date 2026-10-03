import { d595 as c0, d596 as c1, d74 as c2 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d595 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d595;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFixedPricingStrategy"]:c0(),["DeliveryFixedPricingStrategyRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryFixedPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
