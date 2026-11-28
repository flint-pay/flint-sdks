import { d10771 as c0, d10772 as c2, d10773 as c3, d10774 as c4, d10775 as c5, d10776 as c6, d10777 as c7 } from '../descriptors/data/512.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10787 as c1 } from '../descriptors/data/513.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10771 as d10771 } from '../descriptors/data/512.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2793"]:c2(),["SharedCodec2794"]:c3(),["SharedCodec2795"]:c4(),["SharedCodec2800"]:c5(),["SharedCodec2801"]:c6(),["SharedCodec2802"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
