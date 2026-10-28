import { d5106 as c0 } from '../descriptors/data/237.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5106 as d5106 } from '../descriptors/data/237.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5106;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundDestinations"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundDestinations(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
