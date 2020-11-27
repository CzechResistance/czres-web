function render(props) {
    return function (tok, i) {
        return (i % 2) ? props[tok] : tok;
    };
}

feather.replace();
const url = 'https://gist.githubusercontent.com/Bollorock/0044f05574db406d299e2f6f8d69b628/raw/links.json';

$.getJSON(url, async function (items) {
    const itemTpl = $('script[data-template="list-item"]').text().split(/\$\{(.+?)\}/g);

    $('#link-list').append(items.map(function (item) {
        return itemTpl.map(render(item)).join('');
    }));
    feather.replace();
    // await new Promise(r => setTimeout(r, 2000));
    $('.loading-show').remove();
});
