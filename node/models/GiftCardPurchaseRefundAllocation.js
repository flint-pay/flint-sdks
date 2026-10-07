import { d913 as c0, d915 as c1, d916 as c2, d912 as c3, d41 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d913 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d913;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRefundAllocation"]:c0(),["GiftCardPurchaseRefundRecoveryDestination"]:c1(),["GiftCardPurchaseRefundValueAllocation"]:c2(),["SharedCodec285"]:c3(),["SharedCodec6"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRefundAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
