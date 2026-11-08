import { d5793 as c0, d5791 as c2, d5792 as c3 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d273 as c1 } from '../descriptors/data/14.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5940 as c4, d5941 as c5 } from '../descriptors/data/262.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7197 as c6, d7198 as c7, d7201 as c12, d7204 as c13 } from '../descriptors/data/335.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7090 as c8, d7091 as c9, d7092 as c10, d7093 as c11 } from '../descriptors/data/329.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d273 as d273 } from '../descriptors/data/14.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d273;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec126"]:c4(),["SharedCodec127"]:c5(),["SharedCodec1455"]:c6(),["SharedCodec1456"]:c7(),["SharedCodec283"]:c8(),["SharedCodec284"]:c9(),["SharedCodec285"]:c10(),["SharedCodec286"]:c11(),["SubscriptionDeliveryDestinationRequest"]:c12(),["SubscriptionQuantityChangeLineItemRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
