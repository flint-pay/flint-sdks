import { d266 as c0 } from '../descriptors/data/16.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4020 as c1, d4021 as c4, d4022 as c5 } from '../descriptors/data/173.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3226 as c2, d3227 as c3, d3228 as c7 } from '../descriptors/data/130.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3190 as c6 } from '../descriptors/data/128.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d266 as d266 } from '../descriptors/data/16.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d266;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec252"]:c1(),["SharedCodec253"]:c2(),["SharedCodec254"]:c3(),["SharedCodec255"]:c4(),["SharedCodec256"]:c5(),["SharedCodec3"]:c6(),["SharedCodec71"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
