import { d69 as c0, d1646 as c1, d1645 as c2, d1865 as c3, d1868 as c4, d1864 as c5, d1875 as c6, d1876 as c7, d1877 as c8, d1866 as c9, d407 as c10, d1886 as c11, d1887 as c12, d1888 as c13, d1959 as c14, d1960 as c15, d412 as c16, d410 as c17, d409 as c18, d408 as c19, d411 as c20, d1867 as c21, d1884 as c22, d1883 as c23, d1882 as c24, d1885 as c25 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1877 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1877;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionListResponse"]:c8(),["PromotionRecurrence"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec149"]:c16(),["SharedCodec150"]:c17(),["SharedCodec151"]:c18(),["SharedCodec152"]:c19(),["SharedCodec153"]:c20(),["SharedCodec472"]:c21(),["SharedCodec475"]:c22(),["SharedCodec476"]:c23(),["SharedCodec477"]:c24(),["SharedCodec478"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
