import { d2107 as c0 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2107 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2107;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PurchasedGiftCard"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePurchasedGiftCard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
