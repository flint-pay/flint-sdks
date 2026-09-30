import { d69 as c0, d1646 as c1, d1645 as c2, d1865 as c3, d1868 as c4, d1870 as c5, d1872 as c6, d1873 as c7, d1864 as c8, d1875 as c9, d1876 as c10, d1866 as c11, d407 as c12, d1886 as c13, d1887 as c14, d1888 as c15, d1959 as c16, d1960 as c17, d412 as c18, d410 as c19, d409 as c20, d408 as c21, d411 as c22, d1867 as c23, d1884 as c24, d1883 as c25, d1882 as c26, d1885 as c27 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1873 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1873;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCode"]:c5(),["PromotionCodeResolution"]:c6(),["PromotionCodeResolutionResponse"]:c7(),["PromotionCodesSummary"]:c8(),["PromotionCombinesWith"]:c9(),["PromotionExclusivity"]:c10(),["PromotionRecurrence"]:c11(),["PromotionRule"]:c12(),["PromotionRuleGroup"]:c13(),["PromotionRuleValue"]:c14(),["PromotionSchedule"]:c15(),["ResponseMeta"]:c16(),["ResponseWarning"]:c17(),["SharedCodec149"]:c18(),["SharedCodec150"]:c19(),["SharedCodec151"]:c20(),["SharedCodec152"]:c21(),["SharedCodec153"]:c22(),["SharedCodec472"]:c23(),["SharedCodec475"]:c24(),["SharedCodec476"]:c25(),["SharedCodec477"]:c26(),["SharedCodec478"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResolutionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
