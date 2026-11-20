import { d10667 as c0, d10668 as c2, d10669 as c3, d10670 as c4, d10671 as c5, d10672 as c6, d10673 as c7 } from '../descriptors/data/506.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10683 as c1 } from '../descriptors/data/507.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10667 as d10667 } from '../descriptors/data/506.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10667;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2755"]:c2(),["SharedCodec2756"]:c3(),["SharedCodec2757"]:c4(),["SharedCodec2762"]:c5(),["SharedCodec2763"]:c6(),["SharedCodec2764"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
