import { d4281 as c0 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6764 as c1, d6765 as c2, d6766 as c3, d6767 as c4, d6768 as c5, d6769 as c6 } from '../descriptors/data/321.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1280 as c7 } from '../descriptors/data/60.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6771 as c8, d6772 as c9, d6773 as c10, d6774 as c11 } from '../descriptors/data/322.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1280 as d1280 } from '../descriptors/data/60.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1280;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["RiskPredicateNodeComparison"]:c2(),["RiskPredicateNodeIn"]:c3(),["RiskPredicateNodeInList"]:c4(),["RiskPredicateNodeIsMissing"]:c5(),["RiskPredicateNodeMoneyComparison"]:c6(),["RiskPredicateNodeNot"]:c7(),["SharedCodec1238"]:c8(),["SharedCodec1239"]:c9(),["SharedCodec1240"]:c10(),["SharedCodec1241"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeNot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
