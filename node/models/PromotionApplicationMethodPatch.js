import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9036 as c1 } from '../descriptors/data/432.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9043 as c2, d9044 as c3, d9045 as c4, d9047 as c5, d9048 as c6, d9049 as c7, d9050 as c8, d9051 as c9, d9052 as c10, d9053 as c11, d9054 as c12, d9060 as c18 } from '../descriptors/data/433.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8322 as c13, d8323 as c14, d8324 as c15, d8325 as c16, d8326 as c17 } from '../descriptors/data/391.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9061 as c19, d9062 as c20, d9063 as c21 } from '../descriptors/data/434.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9036 as d9036 } from '../descriptors/data/432.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9036;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1877"]:c5(),["SharedCodec1878"]:c6(),["SharedCodec1879"]:c7(),["SharedCodec1880"]:c8(),["SharedCodec1881"]:c9(),["SharedCodec1882"]:c10(),["SharedCodec1883"]:c11(),["SharedCodec1884"]:c12(),["SharedCodec1885"]:c13(),["SharedCodec1886"]:c14(),["SharedCodec1887"]:c15(),["SharedCodec1888"]:c16(),["SharedCodec1889"]:c17(),["SharedCodec1937"]:c18(),["SharedCodec1938"]:c19(),["SharedCodec1939"]:c20(),["SharedCodec1940"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
