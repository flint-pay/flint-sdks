import { d3179 as c0 } from '../descriptors/data/126.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d277 as c1 } from '../descriptors/data/15.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3193 as c2, d3195 as c3 } from '../descriptors/data/127.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d277 as d277 } from '../descriptors/data/15.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationInputCoordinate"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec247"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationInputCoordinate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
