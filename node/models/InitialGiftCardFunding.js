import { d365 as c0, d375 as c1, d77 as c2, d356 as c3, d355 as c4, d366 as c5, d358 as c6, d357 as c7, d359 as c8, d360 as c9, d361 as c10, d362 as c11, d364 as c12, d363 as c13, d367 as c14, d368 as c15, d370 as c16, d369 as c17 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d375 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["InitialGiftCardFunding"]:c1(),["MoneyValue"]:c2(),["SharedCodec117"]:c3(),["SharedCodec118"]:c4(),["SharedCodec119"]:c5(),["SharedCodec120"]:c6(),["SharedCodec121"]:c7(),["SharedCodec122"]:c8(),["SharedCodec123"]:c9(),["SharedCodec124"]:c10(),["SharedCodec125"]:c11(),["SharedCodec126"]:c12(),["SharedCodec127"]:c13(),["SharedCodec128"]:c14(),["SharedCodec129"]:c15(),["SharedCodec130"]:c16(),["SharedCodec131"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
