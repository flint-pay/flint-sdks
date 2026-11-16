import { d141 as c0 } from '../descriptors/data/6.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8750 as c1 } from '../descriptors/data/414.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c2 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6955 as c3 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7731 as c4 } from '../descriptors/data/357.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d141 as d141 } from '../descriptors/data/6.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentIntentRequest"]:c0(),["CapturePaymentSplitRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeRequest"]:c3(),["SharedCodec175"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
