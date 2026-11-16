import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6962 as c1 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8820 as c2 } from '../descriptors/data/418.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8845 as c3 } from '../descriptors/data/420.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8850 as c4, d8851 as c5, d8853 as c6, d8854 as c7, d8855 as c8, d8856 as c9, d8857 as c10 } from '../descriptors/data/421.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8862 as c11, d8863 as c12, d8864 as c13, d8865 as c14 } from '../descriptors/data/422.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8820 as d8820 } from '../descriptors/data/418.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8820;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1630"]:c3(),["SharedCodec1635"]:c4(),["SharedCodec1636"]:c5(),["SharedCodec1638"]:c6(),["SharedCodec1639"]:c7(),["SharedCodec1640"]:c8(),["SharedCodec1641"]:c9(),["SharedCodec1642"]:c10(),["SharedCodec1647"]:c11(),["SharedCodec1648"]:c12(),["SharedCodec1649"]:c13(),["SharedCodec1650"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
