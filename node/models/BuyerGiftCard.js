import { d84 as c0, d323 as c1 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d84 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d84;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerGiftCard"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerGiftCard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
