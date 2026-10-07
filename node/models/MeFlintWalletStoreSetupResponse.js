import { d1780 as c0, d1781 as c1, d77 as c2, d1824 as c3, d1823 as c4, d2158 as c5, d2159 as c6, d14 as c7, d1822 as c8, d2327 as c9, d2328 as c10, d2329 as c11 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1781 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1781;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MeFlintWalletStoreSetup"]:c0(),["MeFlintWalletStoreSetupResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec488"]:c8(),["StripeClientAuthority"]:c9(),["StripeClientSetup"]:c10(),["StripeClientSetupStripe"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMeFlintWalletStoreSetupResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
