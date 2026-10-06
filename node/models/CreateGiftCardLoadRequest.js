import { d365 as c0, d359 as c1, d77 as c2, d350 as c3, d349 as c4, d360 as c5, d352 as c6, d351 as c7, d353 as c8, d354 as c9, d355 as c10, d356 as c11, d358 as c12, d357 as c13, d361 as c14, d362 as c15, d364 as c16, d363 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d365 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["GiftCardFundingSource"]:c1(),["MoneyValue"]:c2(),["SharedCodec117"]:c3(),["SharedCodec118"]:c4(),["SharedCodec119"]:c5(),["SharedCodec120"]:c6(),["SharedCodec121"]:c7(),["SharedCodec122"]:c8(),["SharedCodec123"]:c9(),["SharedCodec124"]:c10(),["SharedCodec125"]:c11(),["SharedCodec126"]:c12(),["SharedCodec127"]:c13(),["SharedCodec128"]:c14(),["SharedCodec129"]:c15(),["SharedCodec130"]:c16(),["SharedCodec131"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
