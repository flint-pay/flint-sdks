import { d326 as c0 } from '../descriptors/data/20.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c1 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8166 as c3, d8167 as c4, d8169 as c5, d8170 as c6, d8171 as c7, d8172 as c8 } from '../descriptors/data/394.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8173 as c9, d8174 as c10, d8175 as c11, d8177 as c12, d8178 as c13, d8179 as c14, d8180 as c15, d8181 as c16, d8184 as c22, d8185 as c23, d8186 as c24, d8189 as c25, d8190 as c26, d8191 as c27, d8192 as c28 } from '../descriptors/data/395.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7454 as c17, d7455 as c18, d7456 as c19, d7457 as c20, d7458 as c21 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d326 as d326 } from '../descriptors/data/20.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1341"]:c12(),["SharedCodec1342"]:c13(),["SharedCodec1343"]:c14(),["SharedCodec1344"]:c15(),["SharedCodec1345"]:c16(),["SharedCodec1348"]:c17(),["SharedCodec1349"]:c18(),["SharedCodec1350"]:c19(),["SharedCodec1351"]:c20(),["SharedCodec1352"]:c21(),["SharedCodec1353"]:c22(),["SharedCodec1354"]:c23(),["SharedCodec1355"]:c24(),["SharedCodec1383"]:c25(),["SharedCodec1384"]:c26(),["SharedCodec1385"]:c27(),["SharedCodec1386"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
