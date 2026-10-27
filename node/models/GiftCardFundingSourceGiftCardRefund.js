import { d405 as c0 } from '../descriptors/data/22.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3920 as c1 } from '../descriptors/data/166.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d405 as d405 } from '../descriptors/data/22.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardRefund"]:c0(),["SharedCodec133"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
