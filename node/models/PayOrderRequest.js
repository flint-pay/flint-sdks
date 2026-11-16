import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8546 as c1, d8550 as c2, d8553 as c5, d8557 as c9, d8558 as c10, d8565 as c15 } from '../descriptors/data/407.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1101 as c3 } from '../descriptors/data/54.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8639 as c4, d8640 as c6, d8641 as c8, d8642 as c11, d8643 as c12, d8644 as c13, d8645 as c14, d8646 as c37, d8647 as c38 } from '../descriptors/data/411.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6955 as c7 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8566 as c16, d8567 as c17, d8568 as c18, d8569 as c19, d8570 as c20, d8571 as c21, d8572 as c22, d8573 as c23, d8574 as c24, d8575 as c25, d8576 as c26, d8577 as c27, d8578 as c28, d8579 as c29, d8580 as c30, d8581 as c31, d8582 as c32, d8583 as c33, d8584 as c34, d8585 as c35 } from '../descriptors/data/408.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7731 as c36 } from '../descriptors/data/360.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1101 as d1101 } from '../descriptors/data/54.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1472"]:c9(),["SharedCodec1473"]:c10(),["SharedCodec1710"]:c11(),["SharedCodec1711"]:c12(),["SharedCodec1712"]:c13(),["SharedCodec1713"]:c14(),["SharedCodec1728"]:c15(),["SharedCodec1729"]:c16(),["SharedCodec1730"]:c17(),["SharedCodec1731"]:c18(),["SharedCodec1732"]:c19(),["SharedCodec1733"]:c20(),["SharedCodec1734"]:c21(),["SharedCodec1735"]:c22(),["SharedCodec1736"]:c23(),["SharedCodec1737"]:c24(),["SharedCodec1738"]:c25(),["SharedCodec1739"]:c26(),["SharedCodec1740"]:c27(),["SharedCodec1741"]:c28(),["SharedCodec1742"]:c29(),["SharedCodec1743"]:c30(),["SharedCodec1744"]:c31(),["SharedCodec1745"]:c32(),["SharedCodec1746"]:c33(),["SharedCodec1747"]:c34(),["SharedCodec1748"]:c35(),["SharedCodec175"]:c36(),["SharedCodec268"]:c37(),["SharedCodec270"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
