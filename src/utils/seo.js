export function setSEO(title, description) {
    document.title = title ? `${title} | Vlasov Oleksandr` : 'Vlasov Oleksandr — Portfolio';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
        meta.setAttribute('content', description || 'Portfolio — AI & Data Science Engineering Student');
    }
}
