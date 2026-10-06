import { d364 as c0, d917 as c1, d77 as c2, d357 as c3, d356 as c4, d358 as c5, d359 as c6, d360 as c7, d361 as c8, d363 as c9, d362 as c10, d888 as c11, d890 as c12 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d917 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d917;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["GiftCardRefundProvenance"]:c1(),["MoneyValue"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5(),["SharedCodec123"]:c6(),["SharedCodec124"]:c7(),["SharedCodec125"]:c8(),["SharedCodec126"]:c9(),["SharedCodec127"]:c10(),["SharedCodec274"]:c11(),["SharedCodec277"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardRefundProvenance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
