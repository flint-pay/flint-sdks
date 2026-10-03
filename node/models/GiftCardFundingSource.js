import { d353 as c0, d346 as c1, d345 as c2, d347 as c3, d348 as c4, d349 as c5, d350 as c6, d352 as c7, d351 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d353 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d353;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec117"]:c1(),["SharedCodec118"]:c2(),["SharedCodec119"]:c3(),["SharedCodec120"]:c4(),["SharedCodec121"]:c5(),["SharedCodec122"]:c6(),["SharedCodec123"]:c7(),["SharedCodec124"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
