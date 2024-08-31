// Inputs: loadn amount, interest rate, loan term
// Outputs:
// 1. calculate:
//    monthly mortgage payment:
//    total payment amount
//    total interest paid
// 2. round to 2 decimal places

// Error handling
// 1. non-numberic inputs
// 2. other invalid inputs

// TODOs
// 1. i18n
// 2. a11y

function loanCalculater(amount, rate, term) {
    const P = amount;
    const i = rate / 100 / 12;
    const n = term * 12;
    const M = (P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);

    return {
        monthPayment: M,
        totalPayment: M * n,
        totalInterest: M * n - P,
    };
}

function formatTo2Decimail(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

function eventSanitizer(e) {
    e.preventDefault();
    e.stopPropagation();
}

function i18nStub(id, defaultValue) {
    // TODO
    return defaultValue;
}

function inputsValidation(value) {
    return;
}

function validateInputsAndDisplay(value, errorElem) {
    let errorMsg = "";
    if (!value) {
        errorElem.textContent = "";
        return;
    }

    const res = parseFloat(value);
    if (value < 0 || !res) {
        errorMsg = i18nStub(1, "Invalid input");
    }

    if (errorMsg) {
        errorElem.textContent = errorMsg;
    } else {
        errorElem.textContent = "";
    }
}

(function () {
    // intstant input validation
    const $acountElm = document.getElementsByName("load_amount")[0];
    const $termElm = document.getElementsByName("load_term");
    const $rateElm = document.getElementsByName("load_rate");
    const $acountErrorElm = document.getElementById("load_amount_error");
    const $termErrorElm = document.getElementById("load_term_error");
    const $rateErrorElm = document.getElementById("load_rate_error");
    const $inputErrosElm = [$acountErrorElm, $termErrorElm, $rateErrorElm];

    // $acountElm.addEventListener("input", (e) => {
    //     validateInputsAndDisplay(e.target.value, $acountErrorElm);
    // });

    // [$acountElm, $termElm, $rateElm].forEach((elem, index) => {
    //     elem.addEventListener("input", (e) => {
    //         inputValidationHandler(e, $inputErrosElm[index]);
    //     });
    // });

    // form related elements
    const $formElm = document.getElementById("inputs");
    const $submitBtnElm = document.getElementById("load_btn_apply");

    // output elements
    const $monthPaymentElm = document.getElementById("output_monthPayment");
    const $totalPaymentElm = document.getElementById("output_totalPayment");
    const $totalInterestsElm = document.getElementById("output_totalInterests");

    $submitBtnElm.addEventListener("click", (e) => {
        eventSanitizer(e);

        formData = new FormData($formElm);
        const amount = parseFloat(formData.get("load_amount"));
        const term = parseFloat(formData.get("load_term"));
        const rate = parseFloat(formData.get("load_rate"));

        validateInputsAndDisplay(amount, $acountErrorElm);
        validateInputsAndDisplay(term, $termErrorElm);
        validateInputsAndDisplay(rate, $inputErrosElm);

        // const currencyFormatter = new Intl.NumberFormat("en-US", {
        //     style: "currency",
        //     currency: "USA",
        // });

        const currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        // Data validation
        // NaN, 0
        if (!amount || !term || !rate || !amount < 0 || term < 0 || rate < 0) {
            return;
        } else {
            const res = loanCalculater(amount, rate, term);
            $monthPaymentElm.textContent = currencyFormatter.format(
                res.monthPayment
            );
            $totalPaymentElm.textContent = currencyFormatter.format(
                res.totalPayment
            );
            $totalInterestsElm.textContent = currencyFormatter.format(
                res.totalInterest
            );
        }
    });
})();
