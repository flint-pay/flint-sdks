import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6823 as c1, d6824 as c2, d6825 as c3, d6826 as c4, d6827 as c5, d6828 as c6 } from '../descriptors/data/324.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1293 as c7 } from '../descriptors/data/61.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6830 as c8, d6831 as c9, d6832 as c10, d6833 as c11 } from '../descriptors/data/325.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1293 as d1293 } from '../descriptors/data/61.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["RiskPredicateNodeComparison"]:c2(),["RiskPredicateNodeIn"]:c3(),["RiskPredicateNodeInList"]:c4(),["RiskPredicateNodeIsMissing"]:c5(),["RiskPredicateNodeMoneyComparison"]:c6(),["RiskPredicateNodeNot"]:c7(),["SharedCodec1256"]:c8(),["SharedCodec1257"]:c9(),["SharedCodec1258"]:c10(),["SharedCodec1259"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeNot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
