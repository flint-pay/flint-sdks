import { d137 as c0 } from '../descriptors/data/6.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3179 as c1 } from '../descriptors/data/126.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3165 as c2, d3166 as c7, d3167 as c8 } from '../descriptors/data/125.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3193 as c3, d3194 as c5, d3195 as c6 } from '../descriptors/data/127.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3614 as c4 } from '../descriptors/data/149.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d137 as d137 } from '../descriptors/data/6.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d137;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryPickupLocationsPreviewRequest"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryBuyerLocationRequest"]:c2(),["DeliveryCoordinateRequest"]:c3(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c4(),["SharedCodec246"]:c5(),["SharedCodec247"]:c6(),["SharedCodec248"]:c7(),["SharedCodec249"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryPickupLocationsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
