import { d404 as c0 } from '../descriptors/data/22.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3922 as c1, d3923 as c2 } from '../descriptors/data/166.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d404 as d404 } from '../descriptors/data/22.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d404;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardPurchaseRefundRecovery"]:c0(),["SharedCodec135"]:c1(),["SharedCodec136"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardPurchaseRefundRecovery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
