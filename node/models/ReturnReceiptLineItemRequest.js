import { d10684 as c0, d10685 as c2, d10686 as c3, d10687 as c4, d10688 as c5, d10689 as c6, d10690 as c7 } from '../descriptors/data/506.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10700 as c1 } from '../descriptors/data/507.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10684 as d10684 } from '../descriptors/data/506.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10684;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2763"]:c2(),["SharedCodec2764"]:c3(),["SharedCodec2765"]:c4(),["SharedCodec2770"]:c5(),["SharedCodec2771"]:c6(),["SharedCodec2772"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
