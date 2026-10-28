import { d4147 as c0 } from '../descriptors/data/181.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4156 as c1, d4157 as c2, d4158 as c3, d4159 as c4, d4160 as c5, d4161 as c6, d4162 as c7, d4163 as c8, d4164 as c9, d4165 as c10, d4166 as c11 } from '../descriptors/data/182.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4167 as c12, d4168 as c13, d4169 as c14, d4170 as c15, d4171 as c16, d4172 as c17 } from '../descriptors/data/183.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4147 as d4147 } from '../descriptors/data/181.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4147;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec141"]:c1(),["SharedCodec142"]:c2(),["SharedCodec143"]:c3(),["SharedCodec144"]:c4(),["SharedCodec145"]:c5(),["SharedCodec146"]:c6(),["SharedCodec147"]:c7(),["SharedCodec148"]:c8(),["SharedCodec149"]:c9(),["SharedCodec150"]:c10(),["SharedCodec151"]:c11(),["SharedCodec152"]:c12(),["SharedCodec153"]:c13(),["SharedCodec154"]:c14(),["SharedCodec155"]:c15(),["SharedCodec156"]:c16(),["SharedCodec157"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
