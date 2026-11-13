import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1269 as c1 } from '../descriptors/data/61.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8171 as c2, d8172 as c3 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8173 as c4, d8174 as c5, d8177 as c6, d8178 as c7, d8179 as c8, d8180 as c9, d8181 as c10, d8189 as c16, d8190 as c17, d8191 as c18, d8192 as c19 } from '../descriptors/data/395.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7454 as c11, d7455 as c12, d7456 as c13, d7457 as c14, d7458 as c15 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1269 as d1269 } from '../descriptors/data/61.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1269;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionPercentOffMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1341"]:c6(),["SharedCodec1342"]:c7(),["SharedCodec1343"]:c8(),["SharedCodec1344"]:c9(),["SharedCodec1345"]:c10(),["SharedCodec1348"]:c11(),["SharedCodec1349"]:c12(),["SharedCodec1350"]:c13(),["SharedCodec1351"]:c14(),["SharedCodec1352"]:c15(),["SharedCodec1383"]:c16(),["SharedCodec1384"]:c17(),["SharedCodec1385"]:c18(),["SharedCodec1386"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
