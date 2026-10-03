import { d366 as c0, d353 as c1, d342 as c2, d365 as c3, d363 as c4, d344 as c5, d343 as c6, d354 as c7, d346 as c8, d345 as c9, d347 as c10, d348 as c11, d349 as c12, d350 as c13, d352 as c14, d351 as c15, d355 as c16, d356 as c17, d358 as c18, d357 as c19, d364 as c20 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d366 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d366;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardMoney"]:c2(),["GiftCardNotificationRecipient"]:c3(),["InitialGiftCardFunding"]:c4(),["SharedCodec114"]:c5(),["SharedCodec115"]:c6(),["SharedCodec116"]:c7(),["SharedCodec117"]:c8(),["SharedCodec118"]:c9(),["SharedCodec119"]:c10(),["SharedCodec120"]:c11(),["SharedCodec121"]:c12(),["SharedCodec122"]:c13(),["SharedCodec123"]:c14(),["SharedCodec124"]:c15(),["SharedCodec125"]:c16(),["SharedCodec126"]:c17(),["SharedCodec127"]:c18(),["SharedCodec128"]:c19(),["SharedCodec130"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
