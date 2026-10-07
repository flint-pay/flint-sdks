import { d365 as c0, d923 as c1, d77 as c2, d358 as c3, d357 as c4, d359 as c5, d360 as c6, d361 as c7, d362 as c8, d364 as c9, d363 as c10, d894 as c11, d896 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d923 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d923;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["GiftCardRefundProvenance"]:c1(),["MoneyValue"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5(),["SharedCodec123"]:c6(),["SharedCodec124"]:c7(),["SharedCodec125"]:c8(),["SharedCodec126"]:c9(),["SharedCodec127"]:c10(),["SharedCodec278"]:c11(),["SharedCodec281"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardRefundProvenance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
