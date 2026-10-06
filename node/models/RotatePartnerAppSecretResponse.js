import { d77 as c0, d1797 as c1, d1796 as c2, d1915 as c3, d2131 as c4, d2132 as c5, d2271 as c6, d14 as c7, d1795 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2271 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PartnerAppSecretRotationResult"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RotatePartnerAppSecretResponse"]:c6(),["SharedCodec1"]:c7(),["SharedCodec485"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotatePartnerAppSecretResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
