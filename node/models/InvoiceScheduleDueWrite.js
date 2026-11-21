import { d9307 as c0 } from '../descriptors/data/422.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9326 as c1, d9327 as c2, d9328 as c3, d9329 as c4, d9330 as c5 } from '../descriptors/data/423.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9307 as d9307 } from '../descriptors/data/422.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9307;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1692"]:c1(),["SharedCodec1693"]:c2(),["SharedCodec1694"]:c3(),["SharedCodec1695"]:c4(),["SharedCodec1696"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
