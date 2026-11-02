import { d6766 as c0 } from '../descriptors/data/321.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6773 as c1, d6774 as c2 } from '../descriptors/data/322.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6766 as d6766 } from '../descriptors/data/321.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeIn"]:c0(),["SharedCodec1240"]:c1(),["SharedCodec1241"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeIn(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
