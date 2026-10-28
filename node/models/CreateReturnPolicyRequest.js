import { d241 as c0 } from '../descriptors/data/15.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c1 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c2 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5160 as c3, d5161 as c4, d5162 as c5, d5163 as c6, d5164 as c7, d5166 as c8, d5167 as c9, d5168 as c10, d5169 as c11 } from '../descriptors/data/240.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5170 as c12, d5171 as c13, d5172 as c14, d5173 as c15, d5174 as c16, d5175 as c17, d5176 as c18, d5177 as c19, d5178 as c20, d5179 as c21, d5180 as c22 } from '../descriptors/data/241.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d241 as d241 } from '../descriptors/data/15.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d241;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScope"]:c4(),["ReturnRestockingFeePolicy"]:c5(),["ReturnShippingPolicy"]:c6(),["ReturnWindow"]:c7(),["SharedCodec1154"]:c8(),["SharedCodec1155"]:c9(),["SharedCodec1156"]:c10(),["SharedCodec1157"]:c11(),["SharedCodec1158"]:c12(),["SharedCodec1159"]:c13(),["SharedCodec1160"]:c14(),["SharedCodec1161"]:c15(),["SharedCodec1162"]:c16(),["SharedCodec1163"]:c17(),["SharedCodec1164"]:c18(),["SharedCodec1165"]:c19(),["SharedCodec1166"]:c20(),["SharedCodec1167"]:c21(),["SharedCodec1168"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
