import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1105 as c1 } from '../descriptors/data/54.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8553 as c2 } from '../descriptors/data/407.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8566 as c3, d8567 as c4, d8568 as c5, d8583 as c6, d8584 as c7 } from '../descriptors/data/408.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1105 as d1105 } from '../descriptors/data/54.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PayOrderRequestSetup"]:c1(),["PaymentSourceCredentialStripePaymentMethod"]:c2(),["SharedCodec1729"]:c3(),["SharedCodec1730"]:c4(),["SharedCodec1731"]:c5(),["SharedCodec1746"]:c6(),["SharedCodec1747"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestSetup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
