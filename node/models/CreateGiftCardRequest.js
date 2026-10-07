import { d378 as c0, d365 as c1, d377 as c2, d375 as c3, d77 as c4, d356 as c5, d355 as c6, d366 as c7, d358 as c8, d357 as c9, d359 as c10, d360 as c11, d361 as c12, d362 as c13, d364 as c14, d363 as c15, d367 as c16, d368 as c17, d370 as c18, d369 as c19, d376 as c20 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d378 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardNotificationRecipient"]:c2(),["InitialGiftCardFunding"]:c3(),["MoneyValue"]:c4(),["SharedCodec117"]:c5(),["SharedCodec118"]:c6(),["SharedCodec119"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec122"]:c10(),["SharedCodec123"]:c11(),["SharedCodec124"]:c12(),["SharedCodec125"]:c13(),["SharedCodec126"]:c14(),["SharedCodec127"]:c15(),["SharedCodec128"]:c16(),["SharedCodec129"]:c17(),["SharedCodec130"]:c18(),["SharedCodec131"]:c19(),["SharedCodec133"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
