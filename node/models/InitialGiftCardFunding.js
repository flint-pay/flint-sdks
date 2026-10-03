import { d355 as c0, d344 as c1, d365 as c2, d346 as c3, d345 as c4, d356 as c5, d348 as c6, d347 as c7, d349 as c8, d350 as c9, d351 as c10, d352 as c11, d354 as c12, d353 as c13, d357 as c14, d358 as c15, d360 as c16, d359 as c17 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d365 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["GiftCardMoney"]:c1(),["InitialGiftCardFunding"]:c2(),["SharedCodec114"]:c3(),["SharedCodec115"]:c4(),["SharedCodec116"]:c5(),["SharedCodec117"]:c6(),["SharedCodec118"]:c7(),["SharedCodec119"]:c8(),["SharedCodec120"]:c9(),["SharedCodec121"]:c10(),["SharedCodec122"]:c11(),["SharedCodec123"]:c12(),["SharedCodec124"]:c13(),["SharedCodec125"]:c14(),["SharedCodec126"]:c15(),["SharedCodec127"]:c16(),["SharedCodec128"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
