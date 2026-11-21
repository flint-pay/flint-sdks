import { d7833 as c0 } from '../descriptors/data/332.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7833 as d7833 } from '../descriptors/data/332.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7833;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["VerifyReturnReceiptLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
