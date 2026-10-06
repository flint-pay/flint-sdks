import { d359 as c0, d352 as c1, d351 as c2, d353 as c3, d354 as c4, d355 as c5, d356 as c6, d358 as c7, d357 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d359 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec120"]:c1(),["SharedCodec121"]:c2(),["SharedCodec122"]:c3(),["SharedCodec123"]:c4(),["SharedCodec124"]:c5(),["SharedCodec125"]:c6(),["SharedCodec126"]:c7(),["SharedCodec127"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
