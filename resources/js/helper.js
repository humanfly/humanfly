import _ from 'lodash'
import numbro from 'numbro'

const thisYear = year => {
    const y = (new Date()).getFullYear();
    return (+ y) === (+ year);
};

export default {
    round (value, precision) {
        if(precision === undefined || precision === null || precision === 0) {
            return +numbro(value).format('0');
        }

        const decimal = _.repeat('0', precision);

        return +numbro(value).format(`0.${decimal}`);
    },
    precision (currency) {
        if (currency === 'NTD' || currency === 'TWD') {
            return 0;
        }

        return 2;
    },
    numFmt (value) {
        if (value === undefined || value === null || value === '') {
            return '';
        }

        return numbro(value).format('0,0')
    },
    floatFmt (value) {
        if (value === undefined || value === null || value === '') {
            return '';
        }

        return numbro(value).format('0,0.00')
    },
    priceFmt(value, currency) {
        return currency === 'NTD' ?
            this.numFmt(value):
            this.floatFmt(value);
    },
    combineUri (uri, query) {
        const filtered = _.omitBy(query, q => q === undefined || q === null || q === '');
        const q        = Object.keys(filtered).map(key => `${key}=${filtered[key]}`).join('&');

        return `${uri}?${q}`;
    },
    dateFmt (date, forceYear = false) {
        const year  = + date.substr(0, 4);
        const month = + date.substr(5, 2);
        const day   = + date.substr(8, 2);

        if (forceYear || !thisYear(year)) {
            return `${year} 年 ${month} 月 ${day} 日`;
        }

        return `${month} 月 ${day} 日`;
    },
    percentTrans (value) {
        if (value === undefined || value === null || value === '') {
            return '';
        }

        return numbro(value).format('0,0.0')+"%";
    },
    redirect (url) {
        window.location = url;
    },
}