import { d359 as c0, d904 as c1, d77 as c2, d352 as c3, d351 as c4, d353 as c5, d354 as c6, d355 as c7, d356 as c8, d358 as c9, d357 as c10, d875 as c11, d877 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d904 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d904;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["GiftCardRefundProvenance"]:c1(),["MoneyValue"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5(),["SharedCodec123"]:c6(),["SharedCodec124"]:c7(),["SharedCodec125"]:c8(),["SharedCodec126"]:c9(),["SharedCodec127"]:c10(),["SharedCodec273"]:c11(),["SharedCodec276"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardRefundProvenance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
