export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const formatDate = (dateString) => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    }).format(date);
};