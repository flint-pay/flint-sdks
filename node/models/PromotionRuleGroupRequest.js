import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9043 as c1, d9044 as c2, d9045 as c3, d9048 as c4, d9049 as c5, d9050 as c6, d9051 as c7, d9052 as c8, d9060 as c9 } from '../descriptors/data/433.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9061 as c10, d9062 as c11, d9063 as c12 } from '../descriptors/data/434.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9043 as d9043 } from '../descriptors/data/433.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9043;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1878"]:c4(),["SharedCodec1879"]:c5(),["SharedCodec1880"]:c6(),["SharedCodec1881"]:c7(),["SharedCodec1882"]:c8(),["SharedCodec1937"]:c9(),["SharedCodec1938"]:c10(),["SharedCodec1939"]:c11(),["SharedCodec1940"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
