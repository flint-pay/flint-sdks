import { d392 as c0 } from '../descriptors/data/23.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10684 as c1, d10685 as c7, d10686 as c8, d10687 as c9, d10688 as c10, d10689 as c11, d10690 as c12 } from '../descriptors/data/506.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10590 as c2 } from '../descriptors/data/499.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10700 as c3 } from '../descriptors/data/507.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10593 as c4, d10594 as c5, d10595 as c6 } from '../descriptors/data/500.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9159 as c13 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d392 as d392 } from '../descriptors/data/23.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d392;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2685"]:c4(),["SharedCodec2686"]:c5(),["SharedCodec2687"]:c6(),["SharedCodec2763"]:c7(),["SharedCodec2764"]:c8(),["SharedCodec2765"]:c9(),["SharedCodec2770"]:c10(),["SharedCodec2771"]:c11(),["SharedCodec2772"]:c12(),["SharedCodec455"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
