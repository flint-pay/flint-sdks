import { d666 as c0 } from '../descriptors/data/34.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6597 as c1, d6598 as c2 } from '../descriptors/data/300.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d666 as d666 } from '../descriptors/data/34.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d666;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceExternalPaymentRequest"]:c0(),["SharedCodec242"]:c1(),["SharedCodec243"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceExternalPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
