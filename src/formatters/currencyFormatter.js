const currencyFormatter = (number) => number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default currencyFormatter;
