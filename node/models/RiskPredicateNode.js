import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6764 as c1, d6765 as c2, d6766 as c3, d6767 as c4, d6768 as c5, d6769 as c6 } from '../descriptors/data/321.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6771 as c7, d6772 as c8, d6773 as c9, d6774 as c10 } from '../descriptors/data/322.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6764 as d6764 } from '../descriptors/data/321.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["RiskPredicateNodeComparison"]:c2(),["RiskPredicateNodeIn"]:c3(),["RiskPredicateNodeInList"]:c4(),["RiskPredicateNodeIsMissing"]:c5(),["RiskPredicateNodeMoneyComparison"]:c6(),["SharedCodec1238"]:c7(),["SharedCodec1239"]:c8(),["SharedCodec1240"]:c9(),["SharedCodec1241"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
