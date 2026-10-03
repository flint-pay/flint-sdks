import { d74 as c0, d1786 as c1, d1785 as c2, d1904 as c3, d2121 as c4, d2122 as c5, d2261 as c6 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2261 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2261;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PartnerAppSecretRotationResult"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RotatePartnerAppSecretResponse"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotatePartnerAppSecretResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
