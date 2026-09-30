import { d69 as c0, d1868 as c1, d1866 as c2, d407 as c3, d1886 as c4, d1887 as c5, d412 as c6, d410 as c7, d409 as c8, d408 as c9, d411 as c10, d1867 as c11, d1884 as c12, d1883 as c13, d1882 as c14, d1885 as c15 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1868 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1868;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec149"]:c6(),["SharedCodec150"]:c7(),["SharedCodec151"]:c8(),["SharedCodec152"]:c9(),["SharedCodec153"]:c10(),["SharedCodec472"]:c11(),["SharedCodec475"]:c12(),["SharedCodec476"]:c13(),["SharedCodec477"]:c14(),["SharedCodec478"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
