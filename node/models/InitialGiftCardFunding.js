import { d4147 as c0 } from '../descriptors/data/181.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4215 as c1 } from '../descriptors/data/185.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c2 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4189 as c3, d4190 as c4, d4191 as c5, d4167 as c17, d4168 as c18, d4169 as c19, d4170 as c20, d4171 as c21, d4172 as c22, d4188 as c23 } from '../descriptors/data/183.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4156 as c6, d4157 as c7, d4158 as c8, d4159 as c9, d4160 as c10, d4161 as c11, d4162 as c12, d4163 as c13, d4164 as c14, d4165 as c15, d4166 as c16 } from '../descriptors/data/182.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4192 as c24, d4193 as c25, d4194 as c26 } from '../descriptors/data/184.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4215 as d4215 } from '../descriptors/data/185.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["InitialGiftCardFunding"]:c1(),["MoneyValue"]:c2(),["SharedCodec138"]:c3(),["SharedCodec139"]:c4(),["SharedCodec140"]:c5(),["SharedCodec141"]:c6(),["SharedCodec142"]:c7(),["SharedCodec143"]:c8(),["SharedCodec144"]:c9(),["SharedCodec145"]:c10(),["SharedCodec146"]:c11(),["SharedCodec147"]:c12(),["SharedCodec148"]:c13(),["SharedCodec149"]:c14(),["SharedCodec150"]:c15(),["SharedCodec151"]:c16(),["SharedCodec152"]:c17(),["SharedCodec153"]:c18(),["SharedCodec154"]:c19(),["SharedCodec155"]:c20(),["SharedCodec156"]:c21(),["SharedCodec157"]:c22(),["SharedCodec158"]:c23(),["SharedCodec159"]:c24(),["SharedCodec160"]:c25(),["SharedCodec161"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
