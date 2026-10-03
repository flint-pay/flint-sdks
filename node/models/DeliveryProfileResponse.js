import { d654 as c0, d652 as c1, d650 as c2, d668 as c3, d649 as c4, d74 as c5, d1786 as c6, d1785 as c7, d2121 as c8, d2122 as c9, d653 as c10, d651 as c11 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d668 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d668;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfile"]:c0(),["DeliveryProfileConfiguration"]:c1(),["DeliveryProfileOriginPolicy"]:c2(),["DeliveryProfileResponse"]:c3(),["Dimensions"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec212"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
