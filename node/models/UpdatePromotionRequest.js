import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7788 as c1, d7791 as c2, d7795 as c3, d7796 as c4, d7797 as c5, d7799 as c6 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7800 as c7, d7801 as c8, d7802 as c9, d7803 as c10, d7804 as c11, d7805 as c12, d7806 as c13, d7812 as c19, d7813 as c20, d7814 as c21, d7815 as c22, d7816 as c25, d7817 as c26, d7818 as c27, d7819 as c28, d7820 as c29, d7821 as c30 } from '../descriptors/data/371.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7153 as c14, d7154 as c15, d7155 as c16, d7156 as c17, d7157 as c18 } from '../descriptors/data/333.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5686 as c23 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5790 as c24 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5467 as c31 } from '../descriptors/data/236.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5467 as d5467 } from '../descriptors/data/236.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5467;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1230"]:c6(),["SharedCodec1231"]:c7(),["SharedCodec1232"]:c8(),["SharedCodec1233"]:c9(),["SharedCodec1234"]:c10(),["SharedCodec1235"]:c11(),["SharedCodec1236"]:c12(),["SharedCodec1237"]:c13(),["SharedCodec1238"]:c14(),["SharedCodec1239"]:c15(),["SharedCodec1240"]:c16(),["SharedCodec1241"]:c17(),["SharedCodec1242"]:c18(),["SharedCodec1273"]:c19(),["SharedCodec1274"]:c20(),["SharedCodec1275"]:c21(),["SharedCodec1276"]:c22(),["SharedCodec1563"]:c23(),["SharedCodec1566"]:c24(),["SharedCodec1643"]:c25(),["SharedCodec1644"]:c26(),["SharedCodec1645"]:c27(),["SharedCodec1646"]:c28(),["SharedCodec1647"]:c29(),["SharedCodec1648"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
