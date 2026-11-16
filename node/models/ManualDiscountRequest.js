import { d7604 as c0 } from '../descriptors/data/351.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7604 as d7604 } from '../descriptors/data/351.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7604;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ManualDiscountRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeManualDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
