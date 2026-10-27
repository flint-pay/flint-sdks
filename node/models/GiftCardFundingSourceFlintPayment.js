import { d403 as c0 } from '../descriptors/data/22.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3913 as c1 } from '../descriptors/data/165.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d403 as d403 } from '../descriptors/data/22.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d403;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceFlintPayment"]:c0(),["SharedCodec126"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceFlintPayment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
