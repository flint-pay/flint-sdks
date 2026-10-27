import { d179 as c0 } from '../descriptors/data/9.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4191 as c1, d4192 as c6, d4193 as c7 } from '../descriptors/data/178.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4412 as c2, d4413 as c3, d4415 as c8 } from '../descriptors/data/193.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4405 as c4, d4406 as c5 } from '../descriptors/data/192.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d179 as d179 } from '../descriptors/data/9.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d179;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMeSubscriptionPreviewRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec1135"]:c2(),["SharedCodec1136"]:c3(),["SharedCodec157"]:c4(),["SharedCodec158"]:c5(),["SharedCodec968"]:c6(),["SharedCodec969"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
