import { d691 as c0 } from '../descriptors/data/37.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7748 as c1, d7749 as c2 } from '../descriptors/data/361.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d691 as d691 } from '../descriptors/data/37.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceExternalPaymentRequest"]:c0(),["SharedCodec361"]:c1(),["SharedCodec362"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceExternalPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
