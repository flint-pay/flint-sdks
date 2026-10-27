import { d4736 as c0 } from '../descriptors/data/212.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d193 as c1 } from '../descriptors/data/10.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c2 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4740 as c3, d4744 as c4, d4746 as c5, d4749 as c7, d4750 as c8, d4752 as c9, d4753 as c10 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4378 as c6, d4379 as c16, d4380 as c17, d4381 as c18, d4382 as c19, d4383 as c20 } from '../descriptors/data/191.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4759 as c11, d4760 as c12, d4761 as c13, d4762 as c14, d4763 as c15, d4765 as c21, d4766 as c22, d4767 as c23, d4778 as c24, d4779 as c25, d4780 as c26, d4781 as c27 } from '../descriptors/data/214.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d193 as d193 } from '../descriptors/data/10.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCombinesWithRequest"]:c4(),["PromotionExclusivityRequest"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRuleGroupRequest"]:c7(),["PromotionRuleRequest"]:c8(),["PromotionRuleValueRequest"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec1018"]:c11(),["SharedCodec1019"]:c12(),["SharedCodec1020"]:c13(),["SharedCodec1021"]:c14(),["SharedCodec1022"]:c15(),["SharedCodec1024"]:c16(),["SharedCodec1025"]:c17(),["SharedCodec1026"]:c18(),["SharedCodec1027"]:c19(),["SharedCodec1028"]:c20(),["SharedCodec1029"]:c21(),["SharedCodec1030"]:c22(),["SharedCodec1031"]:c23(),["SharedCodec1044"]:c24(),["SharedCodec1045"]:c25(),["SharedCodec1046"]:c26(),["SharedCodec1047"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
