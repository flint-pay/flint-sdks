import { d323 as c0, d2404 as c1, d2405 as c2, d2406 as c3, d2411 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d2406 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec595"]:c1(),["SharedCodec596"]:c2(),["TaxBreakdown"]:c3(),["TaxJurisdiction"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
