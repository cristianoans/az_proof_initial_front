export const orderStatusMap: { [key: string]: string } = {
    pending: 'Pendente',
    paid: 'Pagamento Aprovado',
    canceled: 'Cancelado',
    shipped: 'Enviado',
    delivered: 'Entregue',
};

export const paymentStatusMap: { [key: string]: string } = {
    pending: 'Pendente',
    succeeded: 'Aprovado',
    Aprovada: 'Aprovado',
};

export const paymentMethodMap: { [key: string]: string } = {
    credit_installments: 'Crédito Parcelado',
    credit: 'Crédito',
    pix: 'Pix',
    boleto: 'Boleto',
    PIX: 'Pix',
};

export const translateValue = (value: string, map: { [key: string]: string }): string => {
    return map[value] || value;
};

export const formatDateBR = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};

export const formatCustomerName = (fullName: string): string => {
    const nameParts = fullName.trim().split(/\s+/);
    if (nameParts.length < 2) return fullName;
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
};