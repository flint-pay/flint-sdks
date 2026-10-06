import { d1753 as c0, d1754 as c1, d77 as c2, d1797 as c3, d1796 as c4, d2131 as c5, d2132 as c6, d14 as c7, d1795 as c8, d2300 as c9, d2301 as c10, d2302 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1754 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MeFlintWalletStoreSetup"]:c0(),["MeFlintWalletStoreSetupResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec485"]:c8(),["StripeClientAuthority"]:c9(),["StripeClientSetup"]:c10(),["StripeClientSetupStripe"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMeFlintWalletStoreSetupResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
