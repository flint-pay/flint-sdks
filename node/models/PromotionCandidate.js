import { d323 as c0, d2060 as c1, d2065 as c2, d2066 as c3 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d2060 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionCandidate"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCandidate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
