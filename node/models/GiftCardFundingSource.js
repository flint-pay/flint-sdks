import { d365 as c0, d358 as c1, d357 as c2, d359 as c3, d360 as c4, d361 as c5, d362 as c6, d364 as c7, d363 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d365 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec120"]:c1(),["SharedCodec121"]:c2(),["SharedCodec122"]:c3(),["SharedCodec123"]:c4(),["SharedCodec124"]:c5(),["SharedCodec125"]:c6(),["SharedCodec126"]:c7(),["SharedCodec127"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
