import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8165 as c1, d8168 as c2, d8172 as c3 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8173 as c4, d8174 as c5, d8176 as c6, d8177 as c7, d8178 as c8, d8179 as c9, d8180 as c10, d8181 as c11, d8182 as c12, d8183 as c13, d8189 as c19, d8190 as c20, d8191 as c21, d8192 as c22, d8193 as c25, d8194 as c26, d8195 as c27, d8196 as c28 } from '../descriptors/data/395.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7454 as c14, d7455 as c15, d7456 as c16, d7457 as c17, d7458 as c18 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5894 as c23 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5978 as c24 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8197 as c29, d8198 as c30 } from '../descriptors/data/396.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5672 as c31 } from '../descriptors/data/249.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5672 as d5672 } from '../descriptors/data/249.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5672;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1340"]:c6(),["SharedCodec1341"]:c7(),["SharedCodec1342"]:c8(),["SharedCodec1343"]:c9(),["SharedCodec1344"]:c10(),["SharedCodec1345"]:c11(),["SharedCodec1346"]:c12(),["SharedCodec1347"]:c13(),["SharedCodec1348"]:c14(),["SharedCodec1349"]:c15(),["SharedCodec1350"]:c16(),["SharedCodec1351"]:c17(),["SharedCodec1352"]:c18(),["SharedCodec1383"]:c19(),["SharedCodec1384"]:c20(),["SharedCodec1385"]:c21(),["SharedCodec1386"]:c22(),["SharedCodec1695"]:c23(),["SharedCodec1698"]:c24(),["SharedCodec1786"]:c25(),["SharedCodec1787"]:c26(),["SharedCodec1788"]:c27(),["SharedCodec1789"]:c28(),["SharedCodec1790"]:c29(),["SharedCodec1791"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
