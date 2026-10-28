import { d423 as c0 } from '../descriptors/data/25.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4111 as c1, d4112 as c2, d4113 as c3, d4114 as c4, d4115 as c5, d4116 as c6, d4117 as c7, d4118 as c8, d4119 as c9, d4120 as c10, d4121 as c11, d4122 as c13 } from '../descriptors/data/179.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4136 as c12 } from '../descriptors/data/181.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4123 as c14 } from '../descriptors/data/180.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d423 as d423 } from '../descriptors/data/25.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d423;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec395"]:c1(),["SharedCodec396"]:c2(),["SharedCodec397"]:c3(),["SharedCodec398"]:c4(),["SharedCodec399"]:c5(),["SharedCodec400"]:c6(),["SharedCodec401"]:c7(),["SharedCodec402"]:c8(),["SharedCodec403"]:c9(),["SharedCodec404"]:c10(),["SharedCodec405"]:c11(),["SharedCodec406"]:c12(),["SharedCodec407"]:c13(),["SharedCodec408"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
