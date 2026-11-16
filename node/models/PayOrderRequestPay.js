import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8546 as c1 } from '../descriptors/data/403.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1103 as c2 } from '../descriptors/data/54.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8639 as c3, d8640 as c4, d8641 as c6, d8642 as c9, d8643 as c10, d8644 as c11 } from '../descriptors/data/407.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6955 as c5 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8557 as c7, d8558 as c8, d8566 as c13, d8567 as c14, d8568 as c15, d8569 as c16, d8570 as c17, d8571 as c18, d8572 as c19, d8573 as c20, d8574 as c21 } from '../descriptors/data/404.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8645 as c12, d8646 as c23, d8647 as c24 } from '../descriptors/data/408.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7731 as c22 } from '../descriptors/data/357.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1103 as d1103 } from '../descriptors/data/54.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1103;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1472"]:c7(),["SharedCodec1473"]:c8(),["SharedCodec1710"]:c9(),["SharedCodec1711"]:c10(),["SharedCodec1712"]:c11(),["SharedCodec1713"]:c12(),["SharedCodec1729"]:c13(),["SharedCodec1730"]:c14(),["SharedCodec1731"]:c15(),["SharedCodec1732"]:c16(),["SharedCodec1733"]:c17(),["SharedCodec1734"]:c18(),["SharedCodec1735"]:c19(),["SharedCodec1736"]:c20(),["SharedCodec1737"]:c21(),["SharedCodec175"]:c22(),["SharedCodec268"]:c23(),["SharedCodec270"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
