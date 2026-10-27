import { d227 as c0 } from '../descriptors/data/13.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5034 as c2 } from '../descriptors/data/230.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5036 as c3, d5037 as c4, d5038 as c5, d5039 as c6, d5040 as c7, d5041 as c8, d5042 as c9, d5043 as c10, d5044 as c11, d5045 as c12, d5046 as c13, d5047 as c14, d5048 as c15, d5049 as c16 } from '../descriptors/data/231.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d227 as d227 } from '../descriptors/data/13.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskRuleRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["SharedCodec1130"]:c3(),["SharedCodec1131"]:c4(),["SharedCodec1132"]:c5(),["SharedCodec1133"]:c6(),["SharedCodec213"]:c7(),["SharedCodec214"]:c8(),["SharedCodec215"]:c9(),["SharedCodec216"]:c10(),["SharedCodec217"]:c11(),["SharedCodec218"]:c12(),["SharedCodec219"]:c13(),["SharedCodec220"]:c14(),["SharedCodec221"]:c15(),["SharedCodec222"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
