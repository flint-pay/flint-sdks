import { d3251 as c0 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5046 as c2, d5050 as c3, d5052 as c4, d5056 as c6, d5057 as c7 } from '../descriptors/data/234.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4638 as c5, d4639 as c17, d4640 as c18, d4641 as c19, d4642 as c20, d4643 as c21 } from '../descriptors/data/209.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5059 as c8, d5061 as c9, d5066 as c10, d5067 as c11, d5068 as c12, d5069 as c13, d5070 as c14, d5071 as c15, d5072 as c16, d5086 as c22, d5087 as c23, d5088 as c24 } from '../descriptors/data/235.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5089 as c25, d5090 as c27, d5091 as c28, d5092 as c29, d5093 as c30 } from '../descriptors/data/236.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3348 as c26 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2625 as c31 } from '../descriptors/data/110.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2625 as d2625 } from '../descriptors/data/110.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2625;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataPatchRequest"]:c0(),["MoneyValue"]:c1(),["PromotionApplicationMethodPatch"]:c2(),["PromotionCombinesWithPatch"]:c3(),["PromotionExclusivityPatch"]:c4(),["PromotionRecurrence"]:c5(),["PromotionRuleGroupRequest"]:c6(),["PromotionRuleRequest"]:c7(),["PromotionRuleValueRequest"]:c8(),["PromotionSchedulePatch"]:c9(),["SharedCodec1095"]:c10(),["SharedCodec1096"]:c11(),["SharedCodec1097"]:c12(),["SharedCodec1098"]:c13(),["SharedCodec1099"]:c14(),["SharedCodec1100"]:c15(),["SharedCodec1101"]:c16(),["SharedCodec1102"]:c17(),["SharedCodec1103"]:c18(),["SharedCodec1104"]:c19(),["SharedCodec1105"]:c20(),["SharedCodec1106"]:c21(),["SharedCodec1120"]:c22(),["SharedCodec1121"]:c23(),["SharedCodec1122"]:c24(),["SharedCodec1123"]:c25(),["SharedCodec1256"]:c26(),["SharedCodec1306"]:c27(),["SharedCodec1307"]:c28(),["SharedCodec1308"]:c29(),["SharedCodec1309"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
