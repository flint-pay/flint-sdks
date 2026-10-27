import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4739 as c1, d4749 as c3, d4750 as c4, d4752 as c5 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4378 as c2, d4379 as c13, d4380 as c14, d4381 as c15, d4382 as c16, d4383 as c17 } from '../descriptors/data/191.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4758 as c6, d4759 as c7, d4760 as c8, d4761 as c9, d4762 as c10, d4763 as c11, d4764 as c12, d4778 as c18, d4779 as c19, d4780 as c20, d4781 as c21 } from '../descriptors/data/214.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4739 as d4739 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4739;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1017"]:c6(),["SharedCodec1018"]:c7(),["SharedCodec1019"]:c8(),["SharedCodec1020"]:c9(),["SharedCodec1021"]:c10(),["SharedCodec1022"]:c11(),["SharedCodec1023"]:c12(),["SharedCodec1024"]:c13(),["SharedCodec1025"]:c14(),["SharedCodec1026"]:c15(),["SharedCodec1027"]:c16(),["SharedCodec1028"]:c17(),["SharedCodec1044"]:c18(),["SharedCodec1045"]:c19(),["SharedCodec1046"]:c20(),["SharedCodec1047"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
