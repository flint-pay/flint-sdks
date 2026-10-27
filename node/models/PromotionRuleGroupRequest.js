import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4749 as c1, d4750 as c2, d4752 as c3 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4759 as c4, d4760 as c5, d4761 as c6, d4762 as c7, d4763 as c8, d4778 as c9, d4779 as c10, d4780 as c11, d4781 as c12 } from '../descriptors/data/214.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4749 as d4749 } from '../descriptors/data/213.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1018"]:c4(),["SharedCodec1019"]:c5(),["SharedCodec1020"]:c6(),["SharedCodec1021"]:c7(),["SharedCodec1022"]:c8(),["SharedCodec1044"]:c9(),["SharedCodec1045"]:c10(),["SharedCodec1046"]:c11(),["SharedCodec1047"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
