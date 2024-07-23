const { body, validationResult } = require('express-validator');

exports.validateBook = [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('genre').notEmpty().withMessage('Genre is required'),
    body('published_year')
        .isInt({ min: 1000, max: new Date().getFullYear() })
        .withMessage('Published year must be a valid year'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
