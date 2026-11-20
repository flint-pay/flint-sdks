import { d9295 as c0 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9314 as c1, d9315 as c2, d9316 as c3, d9317 as c4, d9318 as c5 } from '../descriptors/data/423.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9295 as d9295 } from '../descriptors/data/422.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1687"]:c1(),["SharedCodec1688"]:c2(),["SharedCodec1689"]:c3(),["SharedCodec1690"]:c4(),["SharedCodec1691"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
