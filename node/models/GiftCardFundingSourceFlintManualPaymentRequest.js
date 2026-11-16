import { d693 as c0 } from '../descriptors/data/38.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7753 as c1 } from '../descriptors/data/362.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d693 as d693 } from '../descriptors/data/38.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d693;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceFlintManualPaymentRequest"]:c0(),["SharedCodec366"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceFlintManualPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
