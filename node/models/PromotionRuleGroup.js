import { d69 as c0, d407 as c1, d1886 as c2, d1887 as c3, d412 as c4, d410 as c5, d409 as c6, d408 as c7, d411 as c8, d1884 as c9, d1883 as c10, d1882 as c11, d1885 as c12 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1886 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1886;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec149"]:c4(),["SharedCodec150"]:c5(),["SharedCodec151"]:c6(),["SharedCodec152"]:c7(),["SharedCodec153"]:c8(),["SharedCodec475"]:c9(),["SharedCodec476"]:c10(),["SharedCodec477"]:c11(),["SharedCodec478"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
