import { d69 as c0, d1865 as c1, d1868 as c2, d1870 as c3, d1872 as c4, d1864 as c5, d1875 as c6, d1876 as c7, d1866 as c8, d407 as c9, d1886 as c10, d1887 as c11, d1888 as c12, d412 as c13, d410 as c14, d409 as c15, d408 as c16, d411 as c17, d1867 as c18, d1884 as c19, d1883 as c20, d1882 as c21, d1885 as c22 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1872 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodeResolution"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionRecurrence"]:c8(),["PromotionRule"]:c9(),["PromotionRuleGroup"]:c10(),["PromotionRuleValue"]:c11(),["PromotionSchedule"]:c12(),["SharedCodec149"]:c13(),["SharedCodec150"]:c14(),["SharedCodec151"]:c15(),["SharedCodec152"]:c16(),["SharedCodec153"]:c17(),["SharedCodec472"]:c18(),["SharedCodec475"]:c19(),["SharedCodec476"]:c20(),["SharedCodec477"]:c21(),["SharedCodec478"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
