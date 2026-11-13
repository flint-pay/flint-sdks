import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8172 as c1 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8173 as c2, d8174 as c3, d8177 as c4, d8178 as c5, d8179 as c6, d8180 as c7, d8181 as c8, d8189 as c9, d8190 as c10, d8191 as c11, d8192 as c12 } from '../descriptors/data/395.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8172 as d8172 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1341"]:c4(),["SharedCodec1342"]:c5(),["SharedCodec1343"]:c6(),["SharedCodec1344"]:c7(),["SharedCodec1345"]:c8(),["SharedCodec1383"]:c9(),["SharedCodec1384"]:c10(),["SharedCodec1385"]:c11(),["SharedCodec1386"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
