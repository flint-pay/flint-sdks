import { d364 as c0, d357 as c1, d356 as c2, d358 as c3, d359 as c4, d360 as c5, d361 as c6, d363 as c7, d362 as c8 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d364 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d364;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec120"]:c1(),["SharedCodec121"]:c2(),["SharedCodec122"]:c3(),["SharedCodec123"]:c4(),["SharedCodec124"]:c5(),["SharedCodec125"]:c6(),["SharedCodec126"]:c7(),["SharedCodec127"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
