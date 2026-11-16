import { d317 as c0 } from '../descriptors/data/18.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c1 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c2 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8751 as c3, d8752 as c4 } from '../descriptors/data/414.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8640 as c5 } from '../descriptors/data/407.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6955 as c6 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7731 as c7 } from '../descriptors/data/357.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8787 as c8, d8788 as c9, d8789 as c10, d8790 as c11, d8791 as c12, d8792 as c13, d8793 as c14, d8794 as c15, d8795 as c16, d8796 as c17, d8797 as c18 } from '../descriptors/data/416.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8798 as c19, d8799 as c20, d8800 as c21, d8801 as c22 } from '../descriptors/data/417.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d317 as d317 } from '../descriptors/data/18.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeRequest"]:c6(),["SharedCodec175"]:c7(),["SharedCodec449"]:c8(),["SharedCodec450"]:c9(),["SharedCodec451"]:c10(),["SharedCodec452"]:c11(),["SharedCodec453"]:c12(),["SharedCodec454"]:c13(),["SharedCodec455"]:c14(),["SharedCodec456"]:c15(),["SharedCodec457"]:c16(),["SharedCodec458"]:c17(),["SharedCodec459"]:c18(),["SharedCodec460"]:c19(),["SharedCodec461"]:c20(),["SharedCodec462"]:c21(),["SharedCodec463"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
