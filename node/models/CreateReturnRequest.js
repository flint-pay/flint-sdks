import { d394 as c0 } from '../descriptors/data/24.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c1 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9815 as c2 } from '../descriptors/data/454.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d394 as d394 } from '../descriptors/data/24.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnRequest"]:c0(),["MetadataRequest"]:c1(),["ReturnLineItemRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
