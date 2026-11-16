import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1259 as c1 } from '../descriptors/data/61.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9042 as c2, d9043 as c3, d9044 as c4, d9045 as c5, d9048 as c6, d9049 as c7, d9050 as c8, d9051 as c9, d9052 as c10, d9060 as c16 } from '../descriptors/data/433.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8322 as c11, d8323 as c12, d8324 as c13, d8325 as c14, d8326 as c15 } from '../descriptors/data/391.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9061 as c17, d9062 as c18, d9063 as c19 } from '../descriptors/data/434.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1259 as d1259 } from '../descriptors/data/61.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1259;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionAmountOffMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1878"]:c6(),["SharedCodec1879"]:c7(),["SharedCodec1880"]:c8(),["SharedCodec1881"]:c9(),["SharedCodec1882"]:c10(),["SharedCodec1885"]:c11(),["SharedCodec1886"]:c12(),["SharedCodec1887"]:c13(),["SharedCodec1888"]:c14(),["SharedCodec1889"]:c15(),["SharedCodec1937"]:c16(),["SharedCodec1938"]:c17(),["SharedCodec1939"]:c18(),["SharedCodec1940"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionAmountOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
