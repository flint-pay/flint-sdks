import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5160 as c1, d5161 as c2, d5162 as c3, d5163 as c4, d5164 as c5, d5166 as c6, d5167 as c7, d5168 as c8, d5169 as c9 } from '../descriptors/data/240.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5170 as c10, d5171 as c11, d5172 as c12, d5173 as c13, d5174 as c14, d5175 as c15, d5176 as c16, d5177 as c17, d5178 as c18, d5179 as c19, d5180 as c20 } from '../descriptors/data/241.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5160 as d5160 } from '../descriptors/data/240.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5160;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1154"]:c6(),["SharedCodec1155"]:c7(),["SharedCodec1156"]:c8(),["SharedCodec1157"]:c9(),["SharedCodec1158"]:c10(),["SharedCodec1159"]:c11(),["SharedCodec1160"]:c12(),["SharedCodec1161"]:c13(),["SharedCodec1162"]:c14(),["SharedCodec1163"]:c15(),["SharedCodec1164"]:c16(),["SharedCodec1165"]:c17(),["SharedCodec1166"]:c18(),["SharedCodec1167"]:c19(),["SharedCodec1168"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
