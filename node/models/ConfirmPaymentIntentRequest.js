import { d191 as c0 } from '../descriptors/data/8.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8639 as c1, d8641 as c2, d8642 as c3, d8643 as c4, d8644 as c5 } from '../descriptors/data/407.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8645 as c6, d8646 as c11, d8647 as c13 } from '../descriptors/data/408.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8769 as c7, d8772 as c8 } from '../descriptors/data/415.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8773 as c9, d8774 as c10, d8775 as c12 } from '../descriptors/data/416.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d191 as d191 } from '../descriptors/data/8.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d191;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec1710"]:c3(),["SharedCodec1711"]:c4(),["SharedCodec1712"]:c5(),["SharedCodec1713"]:c6(),["SharedCodec264"]:c7(),["SharedCodec265"]:c8(),["SharedCodec266"]:c9(),["SharedCodec267"]:c10(),["SharedCodec268"]:c11(),["SharedCodec269"]:c12(),["SharedCodec270"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
