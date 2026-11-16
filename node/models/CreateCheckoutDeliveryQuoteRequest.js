import { d7451 as c0 } from '../descriptors/data/338.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7452 as c1, d7456 as c7, d7457 as c9, d7458 as c10, d7459 as c11, d7460 as c12, d7461 as c13, d7462 as c14, d7463 as c15, d7464 as c16, d7465 as c17 } from '../descriptors/data/339.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d204 as c2 } from '../descriptors/data/9.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7371 as c3 } from '../descriptors/data/334.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7372 as c4, d7377 as c5, d7373 as c20, d7378 as c21, d7379 as c22, d7374 as c23, d7375 as c24 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d478 as c6 } from '../descriptors/data/28.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c8 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7466 as c18, d7467 as c19 } from '../descriptors/data/340.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d204 as d204 } from '../descriptors/data/9.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d204;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec161"]:c9(),["SharedCodec162"]:c10(),["SharedCodec163"]:c11(),["SharedCodec164"]:c12(),["SharedCodec165"]:c13(),["SharedCodec166"]:c14(),["SharedCodec167"]:c15(),["SharedCodec168"]:c16(),["SharedCodec169"]:c17(),["SharedCodec170"]:c18(),["SharedCodec171"]:c19(),["SharedCodec638"]:c20(),["SharedCodec639"]:c21(),["SharedCodec640"]:c22(),["SharedCodec641"]:c23(),["SharedCodec642"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
