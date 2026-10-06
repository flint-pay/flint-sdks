import { d370 as c0, d364 as c1, d77 as c2, d355 as c3, d354 as c4, d365 as c5, d357 as c6, d356 as c7, d358 as c8, d359 as c9, d360 as c10, d361 as c11, d363 as c12, d362 as c13, d366 as c14, d367 as c15, d369 as c16, d368 as c17 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d370 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d370;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["GiftCardFundingSource"]:c1(),["MoneyValue"]:c2(),["SharedCodec117"]:c3(),["SharedCodec118"]:c4(),["SharedCodec119"]:c5(),["SharedCodec120"]:c6(),["SharedCodec121"]:c7(),["SharedCodec122"]:c8(),["SharedCodec123"]:c9(),["SharedCodec124"]:c10(),["SharedCodec125"]:c11(),["SharedCodec126"]:c12(),["SharedCodec127"]:c13(),["SharedCodec128"]:c14(),["SharedCodec129"]:c15(),["SharedCodec130"]:c16(),["SharedCodec131"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
