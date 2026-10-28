import { d3478 as c0, d3479 as c1 } from '../descriptors/data/143.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2564 as c2 } from '../descriptors/data/106.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2564 as d2564 } from '../descriptors/data/106.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec61"]:c0(),["SharedCodec62"]:c1(),["SubscriptionPlanTermsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
