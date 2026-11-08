import { d5556 as c0 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7795 as c1, d7796 as c2, d7797 as c3 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7800 as c4, d7801 as c5, d7802 as c6, d7803 as c7, d7804 as c8, d7812 as c9, d7813 as c10, d7814 as c11, d7815 as c12 } from '../descriptors/data/371.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7795 as d7795 } from '../descriptors/data/370.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7795;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1231"]:c4(),["SharedCodec1232"]:c5(),["SharedCodec1233"]:c6(),["SharedCodec1234"]:c7(),["SharedCodec1235"]:c8(),["SharedCodec1273"]:c9(),["SharedCodec1274"]:c10(),["SharedCodec1275"]:c11(),["SharedCodec1276"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
