import { d10662 as c0, d10663 as c2, d10664 as c3, d10665 as c4, d10666 as c5, d10667 as c6, d10668 as c7 } from '../descriptors/data/505.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10678 as c1 } from '../descriptors/data/506.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10662 as d10662 } from '../descriptors/data/505.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10662;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2753"]:c2(),["SharedCodec2754"]:c3(),["SharedCodec2755"]:c4(),["SharedCodec2760"]:c5(),["SharedCodec2761"]:c6(),["SharedCodec2762"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
