import { d230 as c0 } from '../descriptors/data/11.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6540 as c1 } from '../descriptors/data/301.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6541 as c2, d6546 as c3, d6542 as c5, d6547 as c6, d6548 as c7, d6543 as c8, d6544 as c9 } from '../descriptors/data/302.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6515 as c4 } from '../descriptors/data/300.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d230 as d230 } from '../descriptors/data/11.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryPickupLocationsPreviewRequest"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryBuyerLocationRequest"]:c2(),["DeliveryCoordinateRequest"]:c3(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c4(),["SharedCodec508"]:c5(),["SharedCodec509"]:c6(),["SharedCodec510"]:c7(),["SharedCodec511"]:c8(),["SharedCodec512"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryPickupLocationsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
