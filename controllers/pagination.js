const { collection } = require("../models/userSchema")

function pagination(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const keyword = req.query.keyword;
        const order = req.query.order;

        let searchPattern = {}

        if (parseInt(keyword) > 0) {
            searchPattern = {
                "age": { "$gte": keyword, "$lte": keyword }
            }
        } else {
            searchPattern = {
                "$or": [{
                    "firstName": new RegExp(keyword, 'i')
                }, {
                    "lastName": new RegExp(keyword, 'i')
                }, {
                    "gender": new RegExp('^' + keyword, 'i')
                }]
            }
        }

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {}

        if (endIndex < await model.find(searchPattern).countDocuments().exec()) {
            results.next = {
                page: page + 1,
            }
        }

        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
            }
        }

        let sortPattern = {}
        if (order === 'firstName') sortPattern = { firstName: 1 }
        else if (order === 'lastName') sortPattern = { lastName: 1 }
        else if (order === 'gender') sortPattern = { gender: 1 }
        else if (order === 'age') sortPattern = { age: 1 }
        try {
            results.data = await model.find(searchPattern).sort(sortPattern).limit(limit).skip(startIndex).exec();
            if (!results.data.length && page > 1) {
                const newPage = page - 1;
                const newStartIndex = (newPage - 1) * limit
                const newEndIndex = newPage * limit
                delete results.next
                if (newStartIndex > 0) {
                    results.prev = { page: newPage - 1 }
                }
                results.data = await model.find(searchPattern).sort(sortPattern).limit(limit).skip(newStartIndex).exec();
            }
            res.paginationResults = results;
            next()
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}

module.exports = pagination;