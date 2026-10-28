import { d4206 as c0, d4210 as c1, d4211 as c2, d4207 as c3, d4208 as c4 } from '../descriptors/data/179.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4211 as d4211 } from '../descriptors/data/179.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4211;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["OrderDeliveryDestinationRecipientRequest"]:c1(),["OrderDeliveryDestinationRequest"]:c2(),["SharedCodec973"]:c3(),["SharedCodec974"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
