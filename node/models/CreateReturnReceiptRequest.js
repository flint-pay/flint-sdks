import { d392 as c0 } from '../descriptors/data/23.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10662 as c1, d10663 as c7, d10664 as c8, d10665 as c9, d10666 as c10, d10667 as c11, d10668 as c12 } from '../descriptors/data/505.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10569 as c2, d10572 as c4, d10573 as c5, d10574 as c6 } from '../descriptors/data/499.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10678 as c3 } from '../descriptors/data/506.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9145 as c13 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d392 as d392 } from '../descriptors/data/23.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d392;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2679"]:c4(),["SharedCodec2680"]:c5(),["SharedCodec2681"]:c6(),["SharedCodec2753"]:c7(),["SharedCodec2754"]:c8(),["SharedCodec2755"]:c9(),["SharedCodec2760"]:c10(),["SharedCodec2761"]:c11(),["SharedCodec2762"]:c12(),["SharedCodec451"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
