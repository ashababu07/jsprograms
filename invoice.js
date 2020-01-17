"use strict";
var Expertzlab;
(function (Expertzlab) {
    let InvoiceApp;
    (function (InvoiceApp) {
        class Invoice {
            calculateDiscount(price) {
                return price * .30;
            }
        }
        InvoiceApp.Invoice = Invoice;
    })(InvoiceApp = Expertzlab.InvoiceApp || (Expertzlab.InvoiceApp = {}));
})(Expertzlab || (Expertzlab = {}));
