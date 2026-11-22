import { d8692 as c0, d8698 as c2, d8694 as c3, d8700 as c4 } from '../descriptors/data/388.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d532 as c1 } from '../descriptors/data/30.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d532 as d532 } from '../descriptors/data/30.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationInputCoordinate"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec736"]:c3(),["SharedCodec743"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationInputCoordinate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
