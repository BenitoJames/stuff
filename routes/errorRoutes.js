//errorRoutes

const express = require('express');
const router = express.Router();

// fallback 404 route
router.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found',
        message: "We couldn't find the page you're looking for."
    });
});

module.exports = router;