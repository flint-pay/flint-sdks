import { d697 as c0 } from '../descriptors/data/38.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7760 as c1, d7761 as c2 } from '../descriptors/data/362.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d697 as d697 } from '../descriptors/data/38.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d697;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest"]:c0(),["SharedCodec373"]:c1(),["SharedCodec374"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
