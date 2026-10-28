import { d5043 as c0, d5047 as c4, d5051 as c5, d5053 as c6, d5056 as c8, d5057 as c9 } from '../descriptors/data/234.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d230 as c1 } from '../descriptors/data/14.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c2 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c3 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4638 as c7, d4639 as c17, d4640 as c18, d4641 as c19, d4642 as c20, d4643 as c21 } from '../descriptors/data/209.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5059 as c10, d5062 as c11, d5067 as c12, d5068 as c13, d5069 as c14, d5070 as c15, d5071 as c16, d5073 as c22, d5074 as c23, d5075 as c24, d5086 as c25, d5087 as c26, d5088 as c27 } from '../descriptors/data/235.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5089 as c28 } from '../descriptors/data/236.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d230 as d230 } from '../descriptors/data/14.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequestRequest"]:c11(),["SharedCodec1096"]:c12(),["SharedCodec1097"]:c13(),["SharedCodec1098"]:c14(),["SharedCodec1099"]:c15(),["SharedCodec1100"]:c16(),["SharedCodec1102"]:c17(),["SharedCodec1103"]:c18(),["SharedCodec1104"]:c19(),["SharedCodec1105"]:c20(),["SharedCodec1106"]:c21(),["SharedCodec1107"]:c22(),["SharedCodec1108"]:c23(),["SharedCodec1109"]:c24(),["SharedCodec1120"]:c25(),["SharedCodec1121"]:c26(),["SharedCodec1122"]:c27(),["SharedCodec1123"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
