import { d5940 as c0, d5941 as c1 } from '../descriptors/data/262.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8306 as c2, d8307 as c3, d8316 as c4, d8320 as c5 } from '../descriptors/data/400.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8320 as d8320 } from '../descriptors/data/400.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8320;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec126"]:c0(),["SharedCodec127"]:c1(),["SharedCodec1515"]:c2(),["SharedCodec1516"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionTermsRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
