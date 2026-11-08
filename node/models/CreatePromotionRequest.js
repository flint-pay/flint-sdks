import { d310 as c0 } from '../descriptors/data/17.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c1 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c2 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7789 as c3, d7790 as c4, d7792 as c5, d7793 as c6, d7794 as c7, d7795 as c8, d7796 as c9, d7797 as c10, d7798 as c11 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7800 as c12, d7801 as c13, d7802 as c14, d7803 as c15, d7804 as c16, d7807 as c22, d7808 as c23, d7809 as c24, d7812 as c25, d7813 as c26, d7814 as c27, d7815 as c28 } from '../descriptors/data/371.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7153 as c17, d7154 as c18, d7155 as c19, d7156 as c20, d7157 as c21 } from '../descriptors/data/333.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d310 as d310 } from '../descriptors/data/17.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d310;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1231"]:c12(),["SharedCodec1232"]:c13(),["SharedCodec1233"]:c14(),["SharedCodec1234"]:c15(),["SharedCodec1235"]:c16(),["SharedCodec1238"]:c17(),["SharedCodec1239"]:c18(),["SharedCodec1240"]:c19(),["SharedCodec1241"]:c20(),["SharedCodec1242"]:c21(),["SharedCodec1243"]:c22(),["SharedCodec1244"]:c23(),["SharedCodec1245"]:c24(),["SharedCodec1273"]:c25(),["SharedCodec1274"]:c26(),["SharedCodec1275"]:c27(),["SharedCodec1276"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
