import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8165 as c1, d8172 as c2 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8173 as c3, d8174 as c4, d8176 as c5, d8177 as c6, d8178 as c7, d8179 as c8, d8180 as c9, d8181 as c10, d8182 as c11, d8183 as c12, d8189 as c18, d8190 as c19, d8191 as c20, d8192 as c21 } from '../descriptors/data/395.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7454 as c13, d7455 as c14, d7456 as c15, d7457 as c16, d7458 as c17 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8165 as d8165 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8165;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1340"]:c5(),["SharedCodec1341"]:c6(),["SharedCodec1342"]:c7(),["SharedCodec1343"]:c8(),["SharedCodec1344"]:c9(),["SharedCodec1345"]:c10(),["SharedCodec1346"]:c11(),["SharedCodec1347"]:c12(),["SharedCodec1348"]:c13(),["SharedCodec1349"]:c14(),["SharedCodec1350"]:c15(),["SharedCodec1351"]:c16(),["SharedCodec1352"]:c17(),["SharedCodec1383"]:c18(),["SharedCodec1384"]:c19(),["SharedCodec1385"]:c20(),["SharedCodec1386"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
