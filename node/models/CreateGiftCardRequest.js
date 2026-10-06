import { d377 as c0, d364 as c1, d376 as c2, d374 as c3, d77 as c4, d355 as c5, d354 as c6, d365 as c7, d357 as c8, d356 as c9, d358 as c10, d359 as c11, d360 as c12, d361 as c13, d363 as c14, d362 as c15, d366 as c16, d367 as c17, d369 as c18, d368 as c19, d375 as c20 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d377 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardNotificationRecipient"]:c2(),["InitialGiftCardFunding"]:c3(),["MoneyValue"]:c4(),["SharedCodec117"]:c5(),["SharedCodec118"]:c6(),["SharedCodec119"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec122"]:c10(),["SharedCodec123"]:c11(),["SharedCodec124"]:c12(),["SharedCodec125"]:c13(),["SharedCodec126"]:c14(),["SharedCodec127"]:c15(),["SharedCodec128"]:c16(),["SharedCodec129"]:c17(),["SharedCodec130"]:c18(),["SharedCodec131"]:c19(),["SharedCodec133"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
