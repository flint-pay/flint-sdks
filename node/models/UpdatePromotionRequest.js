import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4739 as c1, d4743 as c2, d4745 as c3, d4749 as c5, d4750 as c6, d4752 as c7, d4754 as c8 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4378 as c4, d4379 as c16, d4380 as c17, d4381 as c18, d4382 as c19, d4383 as c20 } from '../descriptors/data/191.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4758 as c9, d4759 as c10, d4760 as c11, d4761 as c12, d4762 as c13, d4763 as c14, d4764 as c15, d4778 as c21, d4779 as c22, d4780 as c23, d4781 as c24, d4782 as c25, d4783 as c26, d4784 as c27, d4785 as c28 } from '../descriptors/data/214.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2465 as c29 } from '../descriptors/data/98.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2465 as d2465 } from '../descriptors/data/98.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2465;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionExclusivityPatch"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRuleGroupRequest"]:c5(),["PromotionRuleRequest"]:c6(),["PromotionRuleValueRequest"]:c7(),["PromotionSchedulePatch"]:c8(),["SharedCodec1017"]:c9(),["SharedCodec1018"]:c10(),["SharedCodec1019"]:c11(),["SharedCodec1020"]:c12(),["SharedCodec1021"]:c13(),["SharedCodec1022"]:c14(),["SharedCodec1023"]:c15(),["SharedCodec1024"]:c16(),["SharedCodec1025"]:c17(),["SharedCodec1026"]:c18(),["SharedCodec1027"]:c19(),["SharedCodec1028"]:c20(),["SharedCodec1044"]:c21(),["SharedCodec1045"]:c22(),["SharedCodec1046"]:c23(),["SharedCodec1047"]:c24(),["SharedCodec1208"]:c25(),["SharedCodec1209"]:c26(),["SharedCodec1210"]:c27(),["SharedCodec1211"]:c28(),["UpdatePromotionRequest"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
