import { d7282 as c0, d7283 as c1, d7284 as c2, d7285 as c3, d7286 as c4 } from '../descriptors/data/330.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7305 as c5, d7306 as c6, d7307 as c7, d7308 as c8, d7309 as c9, d7310 as c10, d7311 as c11, d7312 as c12, d7313 as c13 } from '../descriptors/data/331.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7286 as d7286 } from '../descriptors/data/330.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec333"]:c5(),["SharedCodec334"]:c6(),["SharedCodec335"]:c7(),["SharedCodec336"]:c8(),["SharedCodec337"]:c9(),["SharedCodec338"]:c10(),["SharedCodec339"]:c11(),["SharedCodec340"]:c12(),["SharedCodec341"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
