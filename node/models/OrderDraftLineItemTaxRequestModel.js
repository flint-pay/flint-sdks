import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7394 as c1, d7395 as c2, d7396 as c3 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7397 as c4 } from '../descriptors/data/336.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7395 as d7395 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftLineItemTaxCalculationRequestModel"]:c1(),["OrderDraftLineItemTaxRequestModel"]:c2(),["OrderDraftTaxComponentRequestModel"]:c3(),["OrderDraftTaxJurisdictionRequestModel"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemTaxRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
