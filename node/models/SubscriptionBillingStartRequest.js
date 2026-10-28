import { d5160 as c0, d5161 as c1, d5168 as c2 } from '../descriptors/data/237.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d5168 as d5168 } from '../descriptors/data/237.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1144"]:c0(),["SharedCodec1145"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
