module.exports = {
    ci: {
        collect: {
            url: ['https://www.businessinsider.com/']
        },
        assert: {
            "assert": {
                "assertions": {
                    "categories:accessibility": ["error", {"minScore": 0.82}]
                }
            }
        },
        upload: {
            target: 'temporary-public-storage',
        }
    }
};