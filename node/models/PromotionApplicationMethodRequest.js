import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7789 as c1, d7794 as c2, d7795 as c3, d7796 as c4, d7797 as c5 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7800 as c6, d7801 as c7, d7802 as c8, d7803 as c9, d7804 as c10, d7807 as c16, d7808 as c17, d7809 as c18, d7812 as c19, d7813 as c20, d7814 as c21, d7815 as c22 } from '../descriptors/data/371.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7153 as c11, d7154 as c12, d7155 as c13, d7156 as c14, d7157 as c15 } from '../descriptors/data/333.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7789 as d7789 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7789;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1231"]:c6(),["SharedCodec1232"]:c7(),["SharedCodec1233"]:c8(),["SharedCodec1234"]:c9(),["SharedCodec1235"]:c10(),["SharedCodec1238"]:c11(),["SharedCodec1239"]:c12(),["SharedCodec1240"]:c13(),["SharedCodec1241"]:c14(),["SharedCodec1242"]:c15(),["SharedCodec1243"]:c16(),["SharedCodec1244"]:c17(),["SharedCodec1245"]:c18(),["SharedCodec1273"]:c19(),["SharedCodec1274"]:c20(),["SharedCodec1275"]:c21(),["SharedCodec1276"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
