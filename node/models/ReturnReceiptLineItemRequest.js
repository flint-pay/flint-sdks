import { d10771 as c0, d10772 as c2, d10773 as c3, d10774 as c4, d10775 as c5, d10776 as c6, d10777 as c7 } from '../descriptors/data/511.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10787 as c1 } from '../descriptors/data/512.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10771 as d10771 } from '../descriptors/data/511.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2793"]:c2(),["SharedCodec2794"]:c3(),["SharedCodec2795"]:c4(),["SharedCodec2800"]:c5(),["SharedCodec2801"]:c6(),["SharedCodec2802"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
