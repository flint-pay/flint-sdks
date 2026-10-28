import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5046 as c1, d5056 as c3, d5057 as c4 } from '../descriptors/data/234.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4638 as c2, d4639 as c13, d4640 as c14, d4641 as c15, d4642 as c16, d4643 as c17 } from '../descriptors/data/209.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5059 as c5, d5066 as c6, d5067 as c7, d5068 as c8, d5069 as c9, d5070 as c10, d5071 as c11, d5072 as c12, d5086 as c18, d5087 as c19, d5088 as c20 } from '../descriptors/data/235.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5089 as c21 } from '../descriptors/data/236.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5046 as d5046 } from '../descriptors/data/234.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5046;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1095"]:c6(),["SharedCodec1096"]:c7(),["SharedCodec1097"]:c8(),["SharedCodec1098"]:c9(),["SharedCodec1099"]:c10(),["SharedCodec1100"]:c11(),["SharedCodec1101"]:c12(),["SharedCodec1102"]:c13(),["SharedCodec1103"]:c14(),["SharedCodec1104"]:c15(),["SharedCodec1105"]:c16(),["SharedCodec1106"]:c17(),["SharedCodec1120"]:c18(),["SharedCodec1121"]:c19(),["SharedCodec1122"]:c20(),["SharedCodec1123"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
