import { d7371 as c0 } from '../descriptors/data/334.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7372 as c1, d7377 as c2, d7373 as c3, d7378 as c4, d7379 as c5, d7374 as c6, d7375 as c7 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7372 as d7372 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7372;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec638"]:c3(),["SharedCodec639"]:c4(),["SharedCodec640"]:c5(),["SharedCodec641"]:c6(),["SharedCodec642"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
