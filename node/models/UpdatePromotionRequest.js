import { d69 as c0, d1868 as c1, d1875 as c2, d1876 as c3, d1866 as c4, d407 as c5, d1886 as c6, d1887 as c7, d1888 as c8, d412 as c9, d410 as c10, d409 as c11, d408 as c12, d411 as c13, d1867 as c14, d1884 as c15, d1883 as c16, d1882 as c17, d1885 as c18, d2275 as c19 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2275 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec149"]:c9(),["SharedCodec150"]:c10(),["SharedCodec151"]:c11(),["SharedCodec152"]:c12(),["SharedCodec153"]:c13(),["SharedCodec472"]:c14(),["SharedCodec475"]:c15(),["SharedCodec476"]:c16(),["SharedCodec477"]:c17(),["SharedCodec478"]:c18(),["UpdatePromotionRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
