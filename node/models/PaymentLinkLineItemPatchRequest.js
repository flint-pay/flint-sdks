import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6962 as c1 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8819 as c2 } from '../descriptors/data/421.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8845 as c3 } from '../descriptors/data/423.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8850 as c4, d8851 as c5, d8853 as c6, d8854 as c7, d8855 as c8, d8856 as c9, d8857 as c10, d8858 as c11 } from '../descriptors/data/424.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8859 as c12, d8860 as c13, d8861 as c14 } from '../descriptors/data/425.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8819 as d8819 } from '../descriptors/data/421.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8819;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1630"]:c3(),["SharedCodec1635"]:c4(),["SharedCodec1636"]:c5(),["SharedCodec1638"]:c6(),["SharedCodec1639"]:c7(),["SharedCodec1640"]:c8(),["SharedCodec1641"]:c9(),["SharedCodec1642"]:c10(),["SharedCodec1643"]:c11(),["SharedCodec1644"]:c12(),["SharedCodec1645"]:c13(),["SharedCodec1646"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
