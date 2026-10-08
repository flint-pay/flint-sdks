import { d1779 as c0, d1780 as c1, d323 as c2, d1820 as c3, d1821 as c4, d2162 as c5, d2163 as c6, d14 as c7, d1819 as c8, d2330 as c9, d2331 as c10, d2332 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1780 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1780;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MeFlintWalletStoreSetup"]:c0(),["MeFlintWalletStoreSetupResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec466"]:c8(),["StripeClientAuthority"]:c9(),["StripeClientSetup"]:c10(),["StripeClientSetupStripe"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMeFlintWalletStoreSetupResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
