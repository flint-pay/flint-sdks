import { d378 as c0 } from '../descriptors/data/22.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10563 as c1, d10564 as c2 } from '../descriptors/data/498.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c3 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d378 as d378 } from '../descriptors/data/22.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequest"]:c0(),["CreateReturnDispositionRequestInspectionLine"]:c1(),["CreateReturnDispositionRequestReceiptLine"]:c2(),["MetadataRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
