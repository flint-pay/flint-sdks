import { d6765 as c0 } from '../descriptors/data/321.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6773 as c1 } from '../descriptors/data/322.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6765 as d6765 } from '../descriptors/data/321.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparison"]:c0(),["SharedCodec1240"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparison(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
