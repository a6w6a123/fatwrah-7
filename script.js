// حفظ فاتورة مشتريات
function savePurchaseInvoice() {
    const invoiceName = document.getElementById('invoice-name').value;
    const clientName = document.getElementById('client-name').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const purchaseInvoice = {
        invoiceName,
        clientName,
        startDate,
        endDate,
        products
    };

    let invoices = JSON.parse(localStorage.getItem('purchaseInvoices')) || [];
    invoices.push(purchaseInvoice);
    localStorage.setItem('purchaseInvoices', JSON.stringify(invoices));
    alert('تم حفظ فاتورة المشتريات بنجاح');
}

// عرض فواتير المشتريات
function loadPurchaseInvoices() {
    const invoices = JSON.parse(localStorage.getItem('purchaseInvoices')) || [];
    const invoiceList = document.getElementById('purchase-invoice-list');

    invoices.forEach((invoice, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${invoice.invoiceName}</td>
            <td>${invoice.clientName}</td>
            <td>${invoice.startDate}</td>
            <td>${invoice.endDate}</td>
            <td>
                <button onclick="editPurchaseInvoice(${index})">تعديل</button>
                <button onclick="deletePurchaseInvoice(${index})">حذف</button>
                <button onclick="viewPurchaseInvoice(${index})">عرض</button>
            </td>
        `;
        invoiceList.appendChild(row);
    });
}

// يمكنك إضافة دوال editPurchaseInvoice و deletePurchaseInvoice و viewPurchaseInvoice حسب الحاجة.
