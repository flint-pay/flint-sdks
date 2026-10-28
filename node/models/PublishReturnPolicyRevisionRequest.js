import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d963 as c1 } from '../descriptors/data/46.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5160 as c2, d5161 as c3, d5162 as c4, d5163 as c5, d5164 as c6, d5166 as c7, d5167 as c8, d5168 as c9, d5169 as c10 } from '../descriptors/data/240.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5170 as c11, d5171 as c12, d5172 as c13, d5173 as c14, d5174 as c15, d5175 as c16, d5176 as c17, d5177 as c18, d5178 as c19, d5179 as c20, d5180 as c21 } from '../descriptors/data/241.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d963 as d963 } from '../descriptors/data/46.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d963;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec1154"]:c7(),["SharedCodec1155"]:c8(),["SharedCodec1156"]:c9(),["SharedCodec1157"]:c10(),["SharedCodec1158"]:c11(),["SharedCodec1159"]:c12(),["SharedCodec1160"]:c13(),["SharedCodec1161"]:c14(),["SharedCodec1162"]:c15(),["SharedCodec1163"]:c16(),["SharedCodec1164"]:c17(),["SharedCodec1165"]:c18(),["SharedCodec1166"]:c19(),["SharedCodec1167"]:c20(),["SharedCodec1168"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
