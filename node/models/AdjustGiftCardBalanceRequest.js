import { d14 as c0 } from '../descriptors/data/0.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7817 as c1 } from '../descriptors/data/364.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d14 as d14 } from '../descriptors/data/0.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d14;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustGiftCardBalanceRequest"]:c0(),["SignedMoneyRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAdjustGiftCardBalanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
