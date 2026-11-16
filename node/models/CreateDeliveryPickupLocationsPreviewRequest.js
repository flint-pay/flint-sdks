import { d232 as c0 } from '../descriptors/data/11.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7371 as c1, d7372 as c2, d7377 as c3, d7373 as c5, d7378 as c6, d7379 as c7, d7374 as c8, d7375 as c9 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7346 as c4 } from '../descriptors/data/336.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d232 as d232 } from '../descriptors/data/11.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryPickupLocationsPreviewRequest"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryBuyerLocationRequest"]:c2(),["DeliveryCoordinateRequest"]:c3(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c4(),["SharedCodec638"]:c5(),["SharedCodec639"]:c6(),["SharedCodec640"]:c7(),["SharedCodec641"]:c8(),["SharedCodec642"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryPickupLocationsPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
