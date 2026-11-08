import { d5 as c0 } from '../descriptors/data/0.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5596 as c1 } from '../descriptors/data/251.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4299 as c2 } from '../descriptors/data/180.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5064 as c3, d5065 as c4, d5066 as c5, d5067 as c6, d5068 as c7, d5069 as c11, d5070 as c12, d5071 as c13, d5072 as c14, d5082 as c19, d5083 as c21, d5084 as c22, d5073 as c23, d5074 as c24, d5075 as c25, d5076 as c26, d5077 as c27, d5078 as c28, d5079 as c29, d5080 as c30, d5081 as c35 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c8 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c9 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5058 as c10, d5059 as c15, d5060 as c16, d5061 as c17, d5062 as c18, d5063 as c20 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5638 as c31, d5639 as c32, d5640 as c33 } from '../descriptors/data/254.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4578 as c34 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c36, d4362 as c37 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5 as d5 } from '../descriptors/data/0.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["Dimensions"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequest"]:c6(),["LineItemFulfillmentRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequest"]:c11(),["OrderDraftLineItemTaxRequest"]:c12(),["OrderDraftTaxComponentRequest"]:c13(),["OrderDraftTaxJurisdictionRequest"]:c14(),["SharedCodec252"]:c15(),["SharedCodec253"]:c16(),["SharedCodec254"]:c17(),["SharedCodec255"]:c18(),["SharedCodec256"]:c19(),["SharedCodec257"]:c20(),["SharedCodec258"]:c21(),["SharedCodec259"]:c22(),["SharedCodec261"]:c23(),["SharedCodec262"]:c24(),["SharedCodec263"]:c25(),["SharedCodec264"]:c26(),["SharedCodec266"]:c27(),["SharedCodec267"]:c28(),["SharedCodec269"]:c29(),["SharedCodec270"]:c30(),["SharedCodec271"]:c31(),["SharedCodec272"]:c32(),["SharedCodec273"]:c33(),["SharedCodec604"]:c34(),["SubscribedLineRequest"]:c35(),["TextModifierRequest"]:c36(),["Weight"]:c37()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
