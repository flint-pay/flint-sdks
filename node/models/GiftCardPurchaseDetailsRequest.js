import { d3628 as c0, d3629 as c1 } from '../descriptors/data/150.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3198 as c2 } from '../descriptors/data/127.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3628 as d3628 } from '../descriptors/data/150.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3628;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseDetailsRequest"]:c0(),["GiftCardPurchaseRecipientRequest"]:c1(),["SharedCodec369"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseDetailsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
