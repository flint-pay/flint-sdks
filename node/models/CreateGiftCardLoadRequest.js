import { d361 as c0, d355 as c1, d344 as c2, d346 as c3, d345 as c4, d356 as c5, d348 as c6, d347 as c7, d349 as c8, d350 as c9, d351 as c10, d352 as c11, d354 as c12, d353 as c13, d357 as c14, d358 as c15, d360 as c16, d359 as c17 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d361 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d361;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardMoney"]:c2(),["SharedCodec114"]:c3(),["SharedCodec115"]:c4(),["SharedCodec116"]:c5(),["SharedCodec117"]:c6(),["SharedCodec118"]:c7(),["SharedCodec119"]:c8(),["SharedCodec120"]:c9(),["SharedCodec121"]:c10(),["SharedCodec122"]:c11(),["SharedCodec123"]:c12(),["SharedCodec124"]:c13(),["SharedCodec125"]:c14(),["SharedCodec126"]:c15(),["SharedCodec127"]:c16(),["SharedCodec128"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
