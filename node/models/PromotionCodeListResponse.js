import { d77 as c0, d1823 as c1, d1822 as c2, d2056 as c3, d2059 as c4, d2061 as c5, d2062 as c6, d2055 as c7, d2064 as c8, d2065 as c9, d2057 as c10, d463 as c11, d2075 as c12, d2076 as c13, d2077 as c14, d2157 as c15, d2158 as c16, d14 as c17, d468 as c18, d466 as c19, d465 as c20, d464 as c21, d467 as c22, d1821 as c23, d2058 as c24, d2073 as c25, d2072 as c26, d2071 as c27, d2074 as c28 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2062 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCode"]:c5(),["PromotionCodeListResponse"]:c6(),["PromotionCodesSummary"]:c7(),["PromotionCombinesWith"]:c8(),["PromotionExclusivity"]:c9(),["PromotionRecurrence"]:c10(),["PromotionRule"]:c11(),["PromotionRuleGroup"]:c12(),["PromotionRuleValue"]:c13(),["PromotionSchedule"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec172"]:c18(),["SharedCodec173"]:c19(),["SharedCodec174"]:c20(),["SharedCodec175"]:c21(),["SharedCodec176"]:c22(),["SharedCodec487"]:c23(),["SharedCodec531"]:c24(),["SharedCodec534"]:c25(),["SharedCodec535"]:c26(),["SharedCodec536"]:c27(),["SharedCodec537"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
