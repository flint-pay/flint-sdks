import { d181 as c0 } from '../descriptors/data/10.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4147 as c1 } from '../descriptors/data/181.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4202 as c2, d4192 as c26, d4193 as c27, d4194 as c28 } from '../descriptors/data/184.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4215 as c3, d4223 as c29 } from '../descriptors/data/185.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c4 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4189 as c5, d4190 as c6, d4191 as c7, d4167 as c19, d4168 as c20, d4169 as c21, d4170 as c22, d4171 as c23, d4172 as c24, d4188 as c25 } from '../descriptors/data/183.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4156 as c8, d4157 as c9, d4158 as c10, d4159 as c11, d4160 as c12, d4161 as c13, d4162 as c14, d4163 as c15, d4164 as c16, d4165 as c17, d4166 as c18 } from '../descriptors/data/182.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d181 as d181 } from '../descriptors/data/10.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d181;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardNotificationRecipient"]:c2(),["InitialGiftCardFunding"]:c3(),["MoneyValue"]:c4(),["SharedCodec138"]:c5(),["SharedCodec139"]:c6(),["SharedCodec140"]:c7(),["SharedCodec141"]:c8(),["SharedCodec142"]:c9(),["SharedCodec143"]:c10(),["SharedCodec144"]:c11(),["SharedCodec145"]:c12(),["SharedCodec146"]:c13(),["SharedCodec147"]:c14(),["SharedCodec148"]:c15(),["SharedCodec149"]:c16(),["SharedCodec150"]:c17(),["SharedCodec151"]:c18(),["SharedCodec152"]:c19(),["SharedCodec153"]:c20(),["SharedCodec154"]:c21(),["SharedCodec155"]:c22(),["SharedCodec156"]:c23(),["SharedCodec157"]:c24(),["SharedCodec158"]:c25(),["SharedCodec159"]:c26(),["SharedCodec160"]:c27(),["SharedCodec161"]:c28(),["SharedCodec165"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
