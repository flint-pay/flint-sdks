import { d520 as c0, d526 as c1, d532 as c2, d581 as c3, d1911 as c4, d174 as c5, d175 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1911 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1911;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c3(),["QueryDeliveryPickupAvailabilityRequest"]:c4(),["SharedCodec52"]:c5(),["SharedCodec53"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeQueryDeliveryPickupAvailabilityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
