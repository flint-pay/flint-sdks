import { d5085 as c0 } from '../descriptors/data/233.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5085 as d5085 } from '../descriptors/data/233.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5085;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReceiptSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiptSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
