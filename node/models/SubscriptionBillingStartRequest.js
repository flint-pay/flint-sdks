import { d5461 as c0, d5462 as c1, d5468 as c2 } from '../descriptors/data/258.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5468 as d5468 } from '../descriptors/data/258.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1215"]:c0(),["SharedCodec1216"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
