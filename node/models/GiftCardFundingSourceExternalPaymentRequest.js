import { d691 as c0 } from '../descriptors/data/37.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7748 as c1, d7749 as c2 } from '../descriptors/data/358.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d691 as d691 } from '../descriptors/data/37.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceExternalPaymentRequest"]:c0(),["SharedCodec361"]:c1(),["SharedCodec362"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceExternalPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
