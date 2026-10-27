import { d3179 as c0 } from '../descriptors/data/126.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3165 as c1, d3166 as c5, d3167 as c6 } from '../descriptors/data/125.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3193 as c2, d3194 as c3, d3195 as c4 } from '../descriptors/data/127.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3165 as d3165 } from '../descriptors/data/125.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3165;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec246"]:c3(),["SharedCodec247"]:c4(),["SharedCodec248"]:c5(),["SharedCodec249"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
