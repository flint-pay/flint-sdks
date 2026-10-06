import { d77 as c0, d2059 as c1, d2057 as c2, d463 as c3, d2075 as c4, d2076 as c5, d468 as c6, d466 as c7, d465 as c8, d464 as c9, d467 as c10, d2058 as c11, d2073 as c12, d2072 as c13, d2071 as c14, d2074 as c15 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2059 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec172"]:c6(),["SharedCodec173"]:c7(),["SharedCodec174"]:c8(),["SharedCodec175"]:c9(),["SharedCodec176"]:c10(),["SharedCodec531"]:c11(),["SharedCodec534"]:c12(),["SharedCodec535"]:c13(),["SharedCodec536"]:c14(),["SharedCodec537"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
