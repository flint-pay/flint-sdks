import { d310 as c0 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6823 as c2, d6824 as c3, d6825 as c4, d6826 as c5, d6827 as c6, d6828 as c7, d6819 as c12, d6820 as c13, d6821 as c14, d6822 as c15 } from '../descriptors/data/324.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6830 as c8, d6831 as c9, d6832 as c10, d6833 as c11 } from '../descriptors/data/325.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d310 as d310 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d310;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["RiskPredicateNodeComparison"]:c3(),["RiskPredicateNodeIn"]:c4(),["RiskPredicateNodeInList"]:c5(),["RiskPredicateNodeIsMissing"]:c6(),["RiskPredicateNodeMoneyComparison"]:c7(),["SharedCodec1256"]:c8(),["SharedCodec1257"]:c9(),["SharedCodec1258"]:c10(),["SharedCodec1259"]:c11(),["SharedCodec315"]:c12(),["SharedCodec316"]:c13(),["SharedCodec317"]:c14(),["SharedCodec318"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
