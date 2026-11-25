import { d392 as c0 } from '../descriptors/data/24.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10771 as c1, d10772 as c7, d10773 as c8, d10774 as c9, d10775 as c10, d10776 as c11, d10777 as c12 } from '../descriptors/data/511.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10677 as c2 } from '../descriptors/data/504.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10787 as c3 } from '../descriptors/data/512.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10680 as c4, d10681 as c5, d10682 as c6 } from '../descriptors/data/505.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9239 as c13 } from '../descriptors/data/418.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d392 as d392 } from '../descriptors/data/24.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d392;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2715"]:c4(),["SharedCodec2716"]:c5(),["SharedCodec2717"]:c6(),["SharedCodec2793"]:c7(),["SharedCodec2794"]:c8(),["SharedCodec2795"]:c9(),["SharedCodec2800"]:c10(),["SharedCodec2801"]:c11(),["SharedCodec2802"]:c12(),["SharedCodec462"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
