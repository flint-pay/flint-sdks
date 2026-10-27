import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d874 as c1 } from '../descriptors/data/38.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4378 as c2, d4379 as c11, d4380 as c12, d4381 as c13, d4382 as c14, d4383 as c15 } from '../descriptors/data/191.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4749 as c3, d4750 as c4, d4752 as c5 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4759 as c6, d4760 as c7, d4761 as c8, d4762 as c9, d4763 as c10, d4778 as c16, d4779 as c17, d4780 as c18, d4781 as c19 } from '../descriptors/data/214.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d874 as d874 } from '../descriptors/data/38.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d874;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionPercentOffMethodRequest"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1018"]:c6(),["SharedCodec1019"]:c7(),["SharedCodec1020"]:c8(),["SharedCodec1021"]:c9(),["SharedCodec1022"]:c10(),["SharedCodec1024"]:c11(),["SharedCodec1025"]:c12(),["SharedCodec1026"]:c13(),["SharedCodec1027"]:c14(),["SharedCodec1028"]:c15(),["SharedCodec1044"]:c16(),["SharedCodec1045"]:c17(),["SharedCodec1046"]:c18(),["SharedCodec1047"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
