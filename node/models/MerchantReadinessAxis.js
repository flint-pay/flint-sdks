import { d1797 as c0, d1820 as c1, d1821 as c2, d14 as c3, d1819 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1797 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1797;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantReadinessAxis"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["SharedCodec1"]:c3(),["SharedCodec466"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantReadinessAxis(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
