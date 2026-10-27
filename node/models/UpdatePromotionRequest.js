import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4759 as c1, d4763 as c2, d4765 as c3, d4769 as c5 } from '../descriptors/data/214.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4398 as c4, d4399 as c16, d4400 as c17, d4401 as c18, d4402 as c19, d4403 as c20 } from '../descriptors/data/192.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4770 as c6, d4772 as c7, d4774 as c8, d4778 as c9, d4779 as c10, d4780 as c11, d4781 as c12, d4782 as c13, d4783 as c14, d4784 as c15 } from '../descriptors/data/215.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4798 as c21, d4799 as c22, d4800 as c23, d4801 as c24, d4802 as c25, d4803 as c26, d4804 as c27, d4805 as c28 } from '../descriptors/data/216.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2475 as c29 } from '../descriptors/data/100.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2475 as d2475 } from '../descriptors/data/100.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionExclusivityPatch"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRuleGroupRequest"]:c5(),["PromotionRuleRequest"]:c6(),["PromotionRuleValueRequest"]:c7(),["PromotionSchedulePatch"]:c8(),["SharedCodec1022"]:c9(),["SharedCodec1023"]:c10(),["SharedCodec1024"]:c11(),["SharedCodec1025"]:c12(),["SharedCodec1026"]:c13(),["SharedCodec1027"]:c14(),["SharedCodec1028"]:c15(),["SharedCodec1029"]:c16(),["SharedCodec1030"]:c17(),["SharedCodec1031"]:c18(),["SharedCodec1032"]:c19(),["SharedCodec1033"]:c20(),["SharedCodec1049"]:c21(),["SharedCodec1050"]:c22(),["SharedCodec1051"]:c23(),["SharedCodec1052"]:c24(),["SharedCodec1222"]:c25(),["SharedCodec1223"]:c26(),["SharedCodec1224"]:c27(),["SharedCodec1225"]:c28(),["UpdatePromotionRequest"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
