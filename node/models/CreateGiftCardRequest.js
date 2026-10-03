import { d368 as c0, d355 as c1, d344 as c2, d367 as c3, d365 as c4, d346 as c5, d345 as c6, d356 as c7, d348 as c8, d347 as c9, d349 as c10, d350 as c11, d351 as c12, d352 as c13, d354 as c14, d353 as c15, d357 as c16, d358 as c17, d360 as c18, d359 as c19, d366 as c20 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d368 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardMoney"]:c2(),["GiftCardNotificationRecipient"]:c3(),["InitialGiftCardFunding"]:c4(),["SharedCodec114"]:c5(),["SharedCodec115"]:c6(),["SharedCodec116"]:c7(),["SharedCodec117"]:c8(),["SharedCodec118"]:c9(),["SharedCodec119"]:c10(),["SharedCodec120"]:c11(),["SharedCodec121"]:c12(),["SharedCodec122"]:c13(),["SharedCodec123"]:c14(),["SharedCodec124"]:c15(),["SharedCodec125"]:c16(),["SharedCodec126"]:c17(),["SharedCodec127"]:c18(),["SharedCodec128"]:c19(),["SharedCodec130"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
