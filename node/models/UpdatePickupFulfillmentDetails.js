import { d8459 as c0, d8460 as c1 } from '../descriptors/data/375.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8144 as c2, d8145 as c3 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7781 as c4 } from '../descriptors/data/328.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7781 as d7781 } from '../descriptors/data/328.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7781;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1717"]:c0(),["SharedCodec1718"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3(),["UpdatePickupFulfillmentDetails"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
