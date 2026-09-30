import { d69 as c0, d1865 as c1, d1868 as c2, d1864 as c3, d1875 as c4, d1876 as c5, d1866 as c6, d407 as c7, d1886 as c8, d1887 as c9, d1888 as c10, d412 as c11, d410 as c12, d409 as c13, d408 as c14, d411 as c15, d1867 as c16, d1884 as c17, d1883 as c18, d1882 as c19, d1885 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1865 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1865;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCodesSummary"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec149"]:c11(),["SharedCodec150"]:c12(),["SharedCodec151"]:c13(),["SharedCodec152"]:c14(),["SharedCodec153"]:c15(),["SharedCodec472"]:c16(),["SharedCodec475"]:c17(),["SharedCodec476"]:c18(),["SharedCodec477"]:c19(),["SharedCodec478"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotion(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
