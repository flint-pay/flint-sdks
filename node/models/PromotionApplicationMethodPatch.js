import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7788 as c1, d7795 as c2, d7796 as c3, d7797 as c4, d7799 as c5 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7800 as c6, d7801 as c7, d7802 as c8, d7803 as c9, d7804 as c10, d7805 as c11, d7806 as c12, d7812 as c18, d7813 as c19, d7814 as c20, d7815 as c21 } from '../descriptors/data/371.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7153 as c13, d7154 as c14, d7155 as c15, d7156 as c16, d7157 as c17 } from '../descriptors/data/333.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7788 as d7788 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7788;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1230"]:c5(),["SharedCodec1231"]:c6(),["SharedCodec1232"]:c7(),["SharedCodec1233"]:c8(),["SharedCodec1234"]:c9(),["SharedCodec1235"]:c10(),["SharedCodec1236"]:c11(),["SharedCodec1237"]:c12(),["SharedCodec1238"]:c13(),["SharedCodec1239"]:c14(),["SharedCodec1240"]:c15(),["SharedCodec1241"]:c16(),["SharedCodec1242"]:c17(),["SharedCodec1273"]:c18(),["SharedCodec1274"]:c19(),["SharedCodec1275"]:c20(),["SharedCodec1276"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
