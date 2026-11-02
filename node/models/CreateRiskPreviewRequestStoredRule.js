import { d307 as c0 } from '../descriptors/data/18.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6764 as c2, d6765 as c3, d6766 as c4, d6767 as c5, d6768 as c6, d6769 as c7, d6762 as c12, d6763 as c13 } from '../descriptors/data/321.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6771 as c8, d6772 as c9, d6773 as c10, d6774 as c11 } from '../descriptors/data/322.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d307 as d307 } from '../descriptors/data/18.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d307;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequestStoredRule"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["RiskPredicateNodeComparison"]:c3(),["RiskPredicateNodeIn"]:c4(),["RiskPredicateNodeInList"]:c5(),["RiskPredicateNodeIsMissing"]:c6(),["RiskPredicateNodeMoneyComparison"]:c7(),["SharedCodec1238"]:c8(),["SharedCodec1239"]:c9(),["SharedCodec1240"]:c10(),["SharedCodec1241"]:c11(),["SharedCodec315"]:c12(),["SharedCodec316"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequestStoredRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
