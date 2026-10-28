import { d816 as c0 } from '../descriptors/data/37.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3190 as c1 } from '../descriptors/data/128.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3228 as c2 } from '../descriptors/data/130.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d816 as d816 } from '../descriptors/data/37.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d816;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueSandboxAPIKeyRequestRestricted"]:c0(),["SharedCodec3"]:c1(),["SharedCodec71"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueSandboxAPIKeyRequestRestricted(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
