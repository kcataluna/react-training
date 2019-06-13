import Moment from 'moment';

let date = Moment().subtract(1, 'months').format('YYYY-MM-DD');

export default {
    q: "ReactJS",
    from: date,
    sortBy: "popularity",
    pageSize: 50,
    apiKey: "823f05b6c6c24507970500959a2ab12b"
};