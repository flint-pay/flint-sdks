import { d1786 as c0, d2333 as c1, d2334 as c2, d2335 as c3 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1786 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1786;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MeFlintWalletStoreSetup"]:c0(),["StripeClientAuthority"]:c1(),["StripeClientSetup"]:c2(),["StripeClientSetupStripe"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMeFlintWalletStoreSetup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
