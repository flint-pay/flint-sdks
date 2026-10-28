import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d1001 as c1 } from '../descriptors/data/48.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5161 as c2, d5162 as c3, d5163 as c4, d5164 as c5, d5168 as c6, d5169 as c7 } from '../descriptors/data/240.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5170 as c8, d5171 as c9, d5172 as c10, d5173 as c11, d5174 as c12, d5177 as c13, d5178 as c14, d5179 as c15, d5180 as c16 } from '../descriptors/data/241.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d1001 as d1001 } from '../descriptors/data/48.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1001;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1156"]:c6(),["SharedCodec1157"]:c7(),["SharedCodec1158"]:c8(),["SharedCodec1159"]:c9(),["SharedCodec1160"]:c10(),["SharedCodec1161"]:c11(),["SharedCodec1162"]:c12(),["SharedCodec1165"]:c13(),["SharedCodec1166"]:c14(),["SharedCodec1167"]:c15(),["SharedCodec1168"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
