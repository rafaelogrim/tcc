module.exports = {
    apps: [{
        name: 'projeto-inst',
        script: 'index.js',
        args: '',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '5G',
        env: {
            PORT: 5000,
            NODE_ENV: 'development',
            MONGO_URI: 'mongodb://localhost:27017/projeto-inst',
        },
        env_production: {
            PORT: 5000,
            NODE_ENV: 'production',
            MONGO_URI: 'mongodb://localhost:27017/projeto-inst',
        }
    }]
};
