import { d8146 as c0, d8144 as c2, d8145 as c3 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8962 as c1 } from '../descriptors/data/403.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8962 as d8962 } from '../descriptors/data/403.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["FulfillmentRecipientRequest"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentRecipientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
