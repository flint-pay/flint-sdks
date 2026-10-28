import { d4969 as c0 } from '../descriptors/data/227.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4969 as d4969 } from '../descriptors/data/227.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4969;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessInspectionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
