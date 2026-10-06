import { d77 as c0, d1823 as c1, d1822 as c2, d2056 as c3, d2059 as c4, d2055 as c5, d2064 as c6, d2065 as c7, d2066 as c8, d2057 as c9, d463 as c10, d2075 as c11, d2076 as c12, d2077 as c13, d2157 as c14, d2158 as c15, d14 as c16, d468 as c17, d466 as c18, d465 as c19, d464 as c20, d467 as c21, d1821 as c22, d2058 as c23, d2073 as c24, d2072 as c25, d2071 as c26, d2074 as c27 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2066 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2066;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionListResponse"]:c8(),["PromotionRecurrence"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec1"]:c16(),["SharedCodec172"]:c17(),["SharedCodec173"]:c18(),["SharedCodec174"]:c19(),["SharedCodec175"]:c20(),["SharedCodec176"]:c21(),["SharedCodec487"]:c22(),["SharedCodec531"]:c23(),["SharedCodec534"]:c24(),["SharedCodec535"]:c25(),["SharedCodec536"]:c26(),["SharedCodec537"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
