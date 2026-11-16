import { d701 as c0 } from '../descriptors/data/38.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7749 as c1 } from '../descriptors/data/361.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7755 as c2 } from '../descriptors/data/362.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d701 as d701 } from '../descriptors/data/38.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d701;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImportRequest"]:c0(),["SharedCodec362"]:c1(),["SharedCodec368"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
