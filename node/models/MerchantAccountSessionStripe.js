import { d1789 as c0, d1790 as c1, d1791 as c2, d1792 as c3, d1793 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1789 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1789;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionStripe"]:c0(),["MerchantAccountSessionStripeAccountSession"]:c1(),["MerchantAccountSessionStripeCollectionOptions"]:c2(),["MerchantAccountSessionStripeComponent"]:c3(),["MerchantAccountSessionStripeRequirements"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionStripe(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
