import { d137 as c0 } from '../descriptors/data/6.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3179 as c1 } from '../descriptors/data/126.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3165 as c2, d3166 as c7, d3167 as c8 } from '../descriptors/data/125.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3193 as c3, d3194 as c5, d3195 as c6 } from '../descriptors/data/127.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3614 as c4 } from '../descriptors/data/149.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d137 as d137 } from '../descriptors/data/6.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d137;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryPickupLocationsPreviewRequest"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryBuyerLocationRequest"]:c2(),["DeliveryCoordinateRequest"]:c3(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c4(),["SharedCodec246"]:c5(),["SharedCodec247"]:c6(),["SharedCodec248"]:c7(),["SharedCodec249"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryPickupLocationsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
