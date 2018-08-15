# GCS_postgres_test

Works locally when postgres is installed an configured.

When pushed to the cloud with gcloud deploy, I get the error:

Updating service [default] (this may take several minutes)...failed.            
ERROR: (gcloud.app.deploy) Error Response: [9] 
Application startup error:

> testpostgres@1.0.0 start /app
> node app.js

Unhandled rejection SequelizeConnectionError: connect ENOENT /cloudsql/test-postgress:us-central1:testpostgress/.s.PGSQL.5432
    at connection.connect.err (/app/node_modules/sequelize/lib/dialects/postgres/connection-manager.js:128:24)
    at Connection.connectingErrorHandler (/app/node_modules/pg/lib/client.js:123:14)
    at emitOne (events.js:116:13)
    at Connection.emit (events.js:211:7)
    at Socket.reportStreamError (/app/node_modules/pg/lib/connection.js:71:10)
    at emitOne (events.js:116:13)
    at Socket.emit (events.js:211:7)
    at emitErrorNT (internal/streams/destroy.js:64:8)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
