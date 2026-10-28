import { d3902 as c0, d3903 as c5 } from '../descriptors/data/167.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5523 as c1, d5524 as c2, d5525 as c3 } from '../descriptors/data/261.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2652 as c4 } from '../descriptors/data/112.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2652 as d2652 } from '../descriptors/data/112.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2652;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1268"]:c0(),["SharedCodec1334"]:c1(),["SharedCodec1335"]:c2(),["SharedCodec1336"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
