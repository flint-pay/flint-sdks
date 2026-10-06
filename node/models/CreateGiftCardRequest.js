import { d372 as c0, d359 as c1, d371 as c2, d369 as c3, d77 as c4, d350 as c5, d349 as c6, d360 as c7, d352 as c8, d351 as c9, d353 as c10, d354 as c11, d355 as c12, d356 as c13, d358 as c14, d357 as c15, d361 as c16, d362 as c17, d364 as c18, d363 as c19, d370 as c20 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d372 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d372;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardNotificationRecipient"]:c2(),["InitialGiftCardFunding"]:c3(),["MoneyValue"]:c4(),["SharedCodec117"]:c5(),["SharedCodec118"]:c6(),["SharedCodec119"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec122"]:c10(),["SharedCodec123"]:c11(),["SharedCodec124"]:c12(),["SharedCodec125"]:c13(),["SharedCodec126"]:c14(),["SharedCodec127"]:c15(),["SharedCodec128"]:c16(),["SharedCodec129"]:c17(),["SharedCodec130"]:c18(),["SharedCodec131"]:c19(),["SharedCodec133"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
